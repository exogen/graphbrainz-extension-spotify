import qs from 'qs'
import DataLoader from 'dataloader'
import LRUCache from 'lru-cache'
import createLogger from 'debug'
import chunkArray from 'lodash.chunk'

const debug = createLogger('graphbrainz-extension-spotify:loader')

export default function createLoader(options) {
  const { client } = options
  const cache = LRUCache({
    max: options.cacheSize,
    maxAge: options.cacheTTL,
    dispose(key) {
      debug(`Removed from cache. key=${key}`)
    }
  })
  // Make the cache Map-like.
  cache.delete = cache.del
  cache.clear = cache.reset

  const loader = new DataLoader(
    async keys => {
      const entities = {
        artist: [],
        album: [],
        track: []
      }
      const otherRequests = []
      keys.forEach((key, i) => {
        const [endpoint, id] = key
        if (entities[endpoint]) {
          entities[endpoint].push([key, i])
        } else {
          otherRequests.push([key, i])
        }
      })
      const chunks = {
        artists: chunkArray(entities.artist, 50),
        albums: chunkArray(entities.album, 50),
        tracks: chunkArray(entities.track, 50)
      }
      const results = []
      const promises = [].concat(
        ...Object.keys(chunks).map(method =>
          Promise.all(
            chunks[method].map(async chunk => {
              const ids = chunk.map(([[endpoint, id], index]) => id)
              const artists = await client[method](ids)
              artists.forEach((artist, i) => {
                const [key, index] = chunk[i]
                results[index] = artist
              })
            })
          )
        ),
        ...otherRequests.map(([key, index]) => {
          const [endpoint, id, params] = key
          switch (endpoint) {
            case 'related-artists':
              return client.relatedArtists(id).then(artists => {
                results[index] = artists
              })
            default:
              throw new Error(`Unsupported endpoint: ${endpoint}`)
          }
        })
      )
      await Promise.all(promises)
      return results
    },
    {
      cacheKeyFn: ([endpoint, id, params = {}]) => {
        return [endpoint, id, qs.stringify(params)].join('/')
      },
      cacheMap: cache
    }
  )

  return loader
}
