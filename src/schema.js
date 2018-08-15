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
    The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
    for the artist.
    """
    artistID: ID!

    """
    The [Spotify URI](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
    for the artist.
    """
    uri: String!

    """
    A link to the Web API endpoint providing full details of the artist.
    """
    href: URLString!

    """
    The name of the artist.
    """
    name: String!

    """
    Known external URLs for this artist.
    """
    externalURLs: [SpotifyExternalURL!]!

    """
    A list of the genres the artist is associated with. For example:
    “Prog Rock”, “Post-Grunge”. (If not yet classified, the array is empty.)
    """
    genres: [String!]!

    """
    The popularity of the artist. The value will be between 0 and 100, with 100
    being the most popular. The artist’s popularity is calculated from the
    popularity of all the artist’s tracks.
    """
    popularity: Int!

    """
    Images of the artist in various sizes, widest first.
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
    title: String
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
    audioFeatures: SpotifyAudioFeatures
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
  type SpotifyAudioFeatures {
    """
    A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0
    represents high confidence the track is acoustic.
    """
    acousticness: Float!

    """
    Danceability describes how suitable a track is for dancing based on a
    combination of musical elements including tempo, rhythm stability, beat
    strength, and overall regularity. A value of 0.0 is least danceable and 1.0
    is most danceable.
    """
    danceability: Float!

    """
    The duration of the track in milliseconds.
    """
    duration: Duration!

    """
    Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of
    intensity and activity. Typically, energetic tracks feel fast, loud, and
    noisy. For example, death metal has high energy, while a Bach prelude scores
    low on the scale. Perceptual features contributing to this attribute include
    dynamic range, perceived loudness, timbre, onset rate, and general entropy.
    """
    energy: Float!

    """
    Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are
    treated as instrumental in this context. Rap or spoken word tracks are
    clearly “vocal”. The closer the instrumentalness value is to 1.0, the
    greater likelihood the track contains no vocal content. Values above 0.5 are
    intended to represent instrumental tracks, but confidence is higher as the
    value approaches 1.0.
    """
    instrumentalness: Float!

    """
    The key the track is in. Integers map to pitches using standard [Pitch Class
    notation](https://en.wikipedia.org/wiki/Pitch_class), e.g. 0 = C, 1 = C♯/D♭,
    2 = D, and so on. See the \`keyName\` field if you’d prefer the note as a
    string.
    """
    key: Int!

    """
    The \`key\` translated from an integer to a name like “C”. (Only one name
    will be returned, so enharmonic notes like like C♯/D♭ will just return
    “C♯”.)
    """
    keyName: String!

    """
    Detects the presence of an audience in the recording. Higher liveness values
    represent an increased probability that the track was performed live. A
    value above 0.8 provides strong likelihood that the track is live.
    """
    liveness: Float!

    """
    The overall loudness of a track in decibels (dB). Loudness values are
    averaged across the entire track and are useful for comparing relative
    loudness of tracks. Loudness is the quality of a sound that is the primary
    psychological correlate of physical strength (amplitude). Values typical
    range between -60 and 0 db.
    """
    loudness: Float!

    """
    Mode indicates the modality (major or minor) of a track, the type of scale
    from which its melodic content is derived. Major is represented by 1 and
    minor is 0.
    """
    mode: SpotifyTrackMode!

    """
    Speechiness detects the presence of spoken words in a track. The more
    exclusively speech-like the recording (e.g. talk show, audio book, poetry),
    the closer to 1.0 the attribute value. Values above 0.66 describe tracks
    that are probably made entirely of spoken words. Values between 0.33 and
    0.66 describe tracks that may contain both music and speech, either in
    sections or layered, including such cases as rap music. Values below 0.33
    most likely represent music and other non-speech-like tracks.
    """
    speechiness: Float!

    """
    The overall estimated tempo of a track in beats per minute (BPM). In musical
    terminology, tempo is the speed or pace of a given piece and derives
    directly from the average beat duration.
    """
    tempo: Float!

    """
    An estimated overall time signature of a track. The time signature (meter)
    is a notational convention to specify how many beats are in each bar (or
    measure).
    """
    timeSignature: Float!

    """
    A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a
    track. Tracks with high valence sound more positive (e.g. happy, cheerful,
    euphoric), while tracks with low valence sound more negative (e.g. sad,
    depressed, angry).
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
    id: String!
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
