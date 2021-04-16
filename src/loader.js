import DataLoader from 'dataloader';
import LRUCache from 'lru-cache';
import createLogger from 'debug';
import chunkArray from 'lodash.chunk';

const debug = createLogger('graphbrainz-extension-spotify:loader');

export default function createLoader(options) {
  const { client } = options;
  const cache = new LRUCache({
    max: options.cacheSize,
    maxAge: options.cacheTTL,
    dispose(key) {
      debug(`Removed from cache. key=${key}`);
    },
  });
  // Make the cache Map-like.
  cache.delete = cache.del;
  cache.clear = cache.reset;

  const loader = new DataLoader(
    async (keys) => {
      // The Spotify API supports batch artist/album/track requests! Combined
      // with DataLoader's batching behavior, we can use this to make a minimal
      // number of requests.
      const entities = {
        artist: [],
        album: [],
        track: [],
      };
      const otherRequests = [];
      keys.forEach((key, i) => {
        const endpoint = key[0];
        // Along with each key, store the index in the output array that the
        // key's request results should be stored under.
        if (entities[endpoint]) {
          entities[endpoint].push([key, i]);
        } else {
          otherRequests.push([key, i]);
        }
      });
      // Split requested entity IDs into chunks of 50.
      const chunks = {
        artists: chunkArray(entities.artist, 50),
        albums: chunkArray(entities.album, 50),
        tracks: chunkArray(entities.track, 50),
      };
      const results = [];
      const promises = [].concat(
        ...Object.keys(chunks).map((method) =>
          Promise.all(
            chunks[method].map(async (chunk) => {
              const ids = chunk.map(([[endpoint, id], index]) => id);
              const artists = await client[method](ids);
              artists.forEach((artist, i) => {
                const index = chunk[i][1];
                results[index] = artist;
              });
            })
          )
        ),
        ...otherRequests.map(([key, index]) => {
          const [endpoint, id, params] = key;
          const setResult = (result) => {
            results[index] = result;
          };
          switch (endpoint) {
            case 'related-artists':
              return client.relatedArtists(id).then(setResult);
            case 'audio-features':
              return client.audioFeatures(id).then(setResult);
            case 'top-tracks':
              return client.topTracks(id, params).then(setResult);
            case 'search':
              return client.search(id, params).then(setResult);
            case 'recommendations':
              return client.recommendations(params).then(setResult);
            default:
              throw new Error(`Unsupported endpoint: ${endpoint}`);
          }
        })
      );
      await Promise.all(promises);
      return results;
    },
    {
      cacheKeyFn: ([endpoint, id, params = {}]) => {
        return [endpoint, id, new URLSearchParams(params).toString()].join('/');
      },
      cacheMap: cache,
    }
  );

  return loader;
}
