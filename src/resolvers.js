import URL from 'url'
import createLogger from 'debug'

const debug = createLogger('graphbrainz-extension-spotify:resolvers')

function findSpotifyID(entity, args, context) {
  // TODO: Make this more efficient by (1) being able to tell GraphBrainz
  // that we should fetch `url-rels` along with the artist when the
  // `discogs` field is requested, and/or (2) adding the ability to check
  // whether `url-rels` were already requested: otherwise we can't
  // distinguish between an item having no URL relationships and them just
  // not being requested yet.
  const isURL = relation => relation['target-type'] === 'url'
  let rels = entity.relations ? entity.relations.filter(isURL) : []
  if (!rels.length) {
    rels = context.loaders.lookup
      .load([entity._type, entity.id, { inc: 'url-rels' }])
      .then(entity => entity.relations.filter(isURL))
  }
  return Promise.resolve(rels).then(rels => {
    const streamingURLs = rels
      .filter(rel => rel.type === 'streaming music')
      .map(rel => URL.parse(rel.url.resource))
    const url = streamingURLs.find(url => url.hostname === 'open.spotify.com')
    if (url) {
      const match = url.pathname.match(/\/(artist|album|track)\/(\w+)$/)
      // Return the segment preceding the ID too, so we know what type of entity
      // we're getting from the API.
      if (match) {
        debug(
          `Matched Spotify URL: ${url.pathname} => [${match[1]}, ${match[2]}]`
        )
        return [match[1], match[2]]
      } else {
        debug(`Failed to parse entity from Spotify URL: ${url.pathname}`)
      }
    }
    return null
  })
}

function createSpotifyResolver(spotifyType) {
  return async function resolveSpotify(entity, args, context) {
    const spotifyID = await findSpotifyID(entity, args, context)
    if (!spotifyID) {
      return null
    }
    const [type, id] = spotifyID
    if (type === spotifyType) {
      return context.loaders.spotify.load([type, id])
    }
  }
}

function resolveExternalURLs(entity) {
  return Object.keys(entity.external_urls).map(key => ({
    type: key,
    url: entity.external_urls[key]
  }))
}

function resolveExternalIDs(entity) {
  return Object.keys(entity.external_ids).map(key => ({
    type: key,
    id: entity.external_ids[key]
  }))
}

const albumTypes = {
  album: 'Album',
  single: 'Single',
  compilation: 'Compilation'
}

const keyNames = [
  'C',
  'C♯',
  'D',
  'D♯',
  'E',
  'F',
  'F♯',
  'G',
  'G♯',
  'A',
  'A♯',
  'B'
]

module.exports = {
  Artist: {
    spotify: createSpotifyResolver('artist')
  },
  Release: {
    spotify: createSpotifyResolver('album')
  },
  Recording: {
    spotify: createSpotifyResolver('track')
  },
  SpotifyArtist: {
    artistID: artist => artist.id,
    externalURLs: resolveExternalURLs,
    relatedArtists: (artist, args, context) => {
      return context.loaders.spotify.load(['related-artists', artist.id])
    },
    topTracks: (artist, args, context) => {
      return context.loaders.spotify.load(['top-tracks', artist.id])
    }
  },
  SpotifyAlbum: {
    albumID: album => album.id,
    title: album => album.name,
    albumType: album => albumTypes[album.album_type] || null,
    externalIDs: resolveExternalIDs,
    externalURLs: resolveExternalURLs,
    availableMarkets: album => album.available_markets,
    releaseDate: album => album.release_date
  },
  SpotifyTrack: {
    trackID: track => track.id,
    title: track => track.name,
    availableMarkets: track => track.available_markets,
    externalIDs: resolveExternalIDs,
    externalURLs: resolveExternalURLs,
    duration: track => track.duration_ms,
    discNumber: track => track.disc_number,
    previewURL: track => track.preview_url,
    trackNumber: track => track.track_number,
    audioFeatures: (track, args, context) => {
      return context.loaders.spotify.load(['audio-features', track.id])
    }
  },
  SpotifyAudioFeatures: {
    duration: audioFeatures => audioFeatures.duration_ms,
    keyName: audioFeatures => keyNames[audioFeatures.key] || null,
    timeSignature: audioFeatures => audioFeatures.time_signature
  },
  SpotifyTrackMode: {
    MAJOR: 1,
    MINOR: 0
  },
  SpotifyCopyrightType: {
    COPYRIGHT: 'C',
    PERFORMANCE: 'P'
  }
}
