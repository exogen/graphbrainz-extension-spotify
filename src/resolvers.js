import URL from 'url';
import createLogger from 'debug';

const debug = createLogger('graphbrainz-extension-spotify:resolvers');

function findSpotifyID(entity, args, context) {
  // TODO: Make this more efficient by (1) being able to tell GraphBrainz
  // that we should fetch `url-rels` along with the artist when the
  // `discogs` field is requested, and/or (2) adding the ability to check
  // whether `url-rels` were already requested: otherwise we can't
  // distinguish between an item having no URL relationships and them just
  // not being requested yet.
  const isURL = relation => relation['target-type'] === 'url';
  let rels = entity.relations ? entity.relations.filter(isURL) : [];
  if (!rels.length) {
    rels = context.loaders.lookup
      .load([entity._type, entity.id, { inc: 'url-rels' }])
      .then(entity => entity.relations.filter(isURL));
  }
  return Promise.resolve(rels).then(rels => {
    const streamingURLs = rels
      .filter(rel => rel.type === 'streaming music')
      .map(rel => URL.parse(rel.url.resource));
    const url = streamingURLs.find(url => url.hostname === 'open.spotify.com');
    if (url) {
      const match = url.pathname.match(/\/(artist)\/(\w+)$/);
      // Return the segment preceding the ID too, so we know what type of entity
      // we're getting from the API.
      if (match) {
        debug(
          `Matched Spotify URL: ${url.pathname} => [${match[1]}, ${match[2]}]`
        );
        return [match[1], match[2]];
      } else {
        debug(`Failed to parse entity from Spotify URL: ${url.pathname}`);
      }
    }
    return null;
  });
}

function createSpotifyResolver(spotifyType) {
  return async function resolveSpotify(entity, args, context) {
    const spotifyID = await findSpotifyID(entity, args, context);
    if (!spotifyID) {
      return null;
    }
    const [type, id] = spotifyID;
    if (type === spotifyType) {
      return context.loaders.spotify.load([type, id]);
    }
  };
}

module.exports = {
  Artist: {
    spotify: createSpotifyResolver('artist')
  },
  SpotifyArtist: {
    artistID: artist => artist.id,
    externalURLs: artist => {
      return Object.keys(artist.external_urls).map(key => ({
        type: key,
        url: artist.external_urls[key]
      }));
    },
    relatedArtists: (artist, args, context) => {
      return context.loaders.spotify.load(['related-artists', artist.id]);
    }
  },
  SpotifyURL: {}
};
