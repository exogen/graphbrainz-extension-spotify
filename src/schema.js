const gql = require('graphbrainz/lib/tag').default

module.exports = gql`
  extend type Artist {
    """
    The artist’s entry on Spotify.
    """
    spotify: SpotifyArtist
  }

  extend type Release {
    """
    The release’s entry on Spotify.
    """
    spotify: SpotifyAlbum
  }

  extend type Recording {
    """
    The recording’s entry on Spotify.
    """
    spotify: SpotifyTrack
  }

  """

  """
  type SpotifyArtist {
    """

    """
    artistID: ID!
    """

    """
    uri: String!
    """

    """
    href: URLString!
    """

    """
    name: String!
    """

    """
    externalURLs: [SpotifyExternalURL!]!
    """

    """
    genres: [String!]!
    """

    """
    popularity: Int!
    """

    """
    images: [SpotifyImage!]!
    """

    """
    topTracks: [SpotifyTrack!]!
    """

    """
    relatedArtists: [SpotifyArtist!]!
  }

  """

  """
  type SpotifyAlbum {
    """

    """
    albumID: ID!
    """

    """
    uri: String!
    """

    """
    href: URLString!
    """

    """
    name: String
    """

    """
    albumType: ReleaseGroupType!
    """

    """
    artists: [SpotifyArtist!]!
    """

    """
    availableMarkets: [String!]!
    """

    """
    copyrights: [SpotifyCopyright!]!
    """

    """
    externalIDs: [SpotifyExternalID!]!
    """

    """
    externalURLs: [SpotifyExternalURL!]!
    """

    """
    genres: [String!]!
    """

    """
    images: [SpotifyImage!]!
    """

    """
    label: String
    """

    """
    popularity: Int!
    """

    """
    releaseDate: Date
  }

  """

  """
  type SpotifyTrack {
    """

    """
    trackID: ID!
    """

    """
    uri: String!
    """

    """
    href: URLString!
    """

    """
    title: String!
    """

    """
    features: SpotifyTrackFeatures
    """

    """
    album: SpotifyAlbum
    """

    """
    artists: [SpotifyArtist!]!
    """

    """
    availableMarkets: [String!]!
    """

    """
    discNumber: Int!
    """

    """
    duration: Duration!
    """

    """
    explicit: Boolean
    """

    """
    externalIDs: [SpotifyExternalID!]!
    """

    """
    externalURLs: [SpotifyExternalURL!]!
    """

    """
    popularity: Int!
    """

    """
    previewURL: URLString
    """

    """
    trackNumber: Int!
  }

  """

  """
  type SpotifyTrackFeatures {
    """

    """
    acousticness: Float!
    """

    """
    danceability: Float!
    """

    """
    duration: Duration!
    """

    """
    energy: Float!
    """

    """
    instrumentalness: Float!
    """

    """
    key: Int!
    """

    """
    keyName: String!
    """

    """
    liveness: Float!
    """

    """
    loudness: Float!
    """

    """
    mode: SpotifyTrackMode!
    """

    """
    speechiness: Float!
    """

    """
    tempo: Float!
    """

    """
    timeSignature: Float!
    """

    """
    valence: Float!
  }

  """

  """
  type SpotifyCopyright {
    """

    """
    text: String!
    """

    """
    type: SpotifyCopyrightType!
  }

  """

  """
  type SpotifyImage {
    """

    """
    url: URLString!
    """

    """
    width: Int
    """

    """
    height: Int
  }

  """

  """
  type SpotifyExternalURL {
    """

    """
    type: String!
    """

    """
    url: URLString!
  }

  """

  """
  type SpotifyExternalID {
    """

    """
    type: String!
    """

    """
    externalID: String!
  }

  """
  The type of copyright.
  """
  enum SpotifyCopyrightType {
    """
    The copyright.
    """
    COPYRIGHT
    """
    The sound recording (performance) copyright.
    """
    PERFORMANCE
  }

  """

  """
  enum SpotifyTrackMode {
    """
    The major scale.
    """
    MAJOR
    """
    The minor scale.
    """
    MINOR
  }
`
