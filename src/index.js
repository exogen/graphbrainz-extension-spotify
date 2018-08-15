import schema from './schema'
import resolvers from './resolvers'
import createLoader from './loader'
import SpotifyClient from './client'
import { ONE_DAY } from 'graphbrainz/lib/util'

export default {
  name: 'Spotify',
  description: `Retrieve artist, release, and recording information from
[Spotify](https://www.spotify.com/).`,
  extendContext(context, { spotify = {} } = {}) {
    const client = new SpotifyClient(spotify)
    const cacheSize = parseInt(
      process.env.SPOTIFY_CACHE_SIZE ||
        process.env.GRAPHBRAINZ_CACHE_SIZE ||
        8192,
      10
    )
    const cacheTTL = parseInt(
      process.env.SPOTIFY_CACHE_TTL ||
        process.env.GRAPHBRAINZ_CACHE_TTL ||
        ONE_DAY,
      10
    )
    return {
      ...context,
      loaders: {
        ...context.loaders,
        spotify: createLoader({ client, cacheSize, cacheTTL })
      }
    }
  },
  extendSchema: {
    schemas: [schema],
    resolvers
  }
}
