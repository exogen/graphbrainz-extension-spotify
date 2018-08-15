import qs from 'qs'
import DataLoader from 'dataloader'
import LRUCache from 'lru-cache'
import createLogger from 'debug'

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
    keys => {
      return Promise.all(
        keys.map(key => {
          const [endpoint, id] = key
          switch (endpoint) {
            case 'artist':
              return client.artists([id]).then(map => map.get(id))
            case 'related-artists':
              return client.relatedArtists(id)
            default:
              throw new Error(`Unsupported endpoint: ${endpoint}`)
          }
        })
      )
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
