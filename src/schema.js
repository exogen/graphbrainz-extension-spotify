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
  An artist from Spotify.
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
    Spotify catalog information about an artist’s top tracks by country.
    """
    topTracks(
      """
      An [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
      country code.
      """
      market: String!
    ): [SpotifyTrack!]!

    """
    Spotify catalog information about artists similar to a given artist.
    Similarity is based on analysis of the Spotify community’s listening
    history.
    """
    relatedArtists: [SpotifyArtist!]!
  }

  """
  An album from Spotify.
  """
  type SpotifyAlbum {
    """
    The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
    for the album.
    """
    albumID: ID!

    """
    The [Spotify URI](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
    for the album.
    """
    uri: String!

    """
    A link to the Web API endpoint providing full details of the album.
    """
    href: URLString!

    """
    The name of the album. In case of an album takedown, the value may be empty.
    """
    title: String

    """
    The type of the album, e.g. “Album”, “Single”, “Compilation”.
    """
    albumType: ReleaseGroupType!

    """
    The artists of the album.
    """
    artists: [SpotifyArtist!]!

    """
    The markets in which the album is available: [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
    country codes.

    Note that an album is considered available in a market when at least 1 of its tracks is available in that market.
    """
    availableMarkets: [String!]!

    """
    The copyright statements of the album.
    """
    copyrights: [SpotifyCopyright!]!

    """
    Known external IDs for the album.
    """
    externalIDs: [SpotifyExternalID!]!

    """
    Known external URLs for this album.
    """
    externalURLs: [SpotifyExternalURL!]!

    """
    A list of the genres used to classify the album. For example: “Prog Rock”,
    “Post-Grunge”. (If not yet classified, the array is empty.)
    """
    genres: [String!]!

    """
    The cover art for the album in various sizes, widest first.
    """
    images: [SpotifyImage!]!

    """
    The label for the album.
    """
    label: String

    """
    The popularity of the album. The value will be between 0 and 100, with 100
    being the most popular. The popularity is calculated from the popularity of
    the album’s individual tracks.
    """
    popularity: Int!

    """
    The date the album was first released, for example “1981-12-15”. Depending
    on the precision, the month or day might be missing.
    """
    releaseDate: Date
  }

  """
  A track from Spotify.
  """
  type SpotifyTrack {
    """
    The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
    for the track.
    """
    trackID: ID!

    """
    The [Spotify URI](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
    for the track.
    """
    uri: String!

    """
    A link to the Web API endpoint providing full details of the track.
    """
    href: URLString!

    """
    The name of the track.
    """
    title: String!

    """
    The audio features of the track.
    """
    audioFeatures: SpotifyAudioFeatures

    """
    The album on which the track appears.
    """
    album: SpotifyAlbum

    """
    The artists who performed the track.
    """
    artists: [SpotifyArtist!]!

    """
    A list of the countries in which the track can be played, identified by
    their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
    code.
    """
    availableMarkets: [String!]!

    """
    The disc number (usually \`1\` unless the album consists of more than one
    disc).
    """
    discNumber: Int!

    """
    The track length in milliseconds.
    """
    duration: Duration!

    """
    Whether or not the track has explicit lyrics, if known.
    """
    explicit: Boolean

    """
    Known external IDs for the track.
    """
    externalIDs: [SpotifyExternalID!]!

    """
    Known external URLs for the track.
    """
    externalURLs: [SpotifyExternalURL!]!

    """
    The popularity of the track. The value will be between 0 and 100, with 100
    being the most popular.

    The popularity is calculated by algorithm and is based, in the most part, on
    the total number of plays the track has had and how recent those plays are.
    Generally speaking, songs that are being played a lot now will have a higher
    popularity than songs that were played a lot in the past.

    Duplicate tracks (e.g. the same track from a single and an album) are rated
    independently.

    Artist and album popularity is derived mathematically from track popularity.

    Note that the popularity value may lag actual popularity by a few days: the
    value is not updated in real time.
    """
    popularity: Int!

    """
    A link to a 30 second preview (MP3 format) of the track, if available.
    """
    previewURL: URLString

    """
    The number of the track. If an album has several discs, the track number is
    the number on the specified disc.
    """
    trackNumber: Int!
  }

  """
  The audio features of a track from Spotify.
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
  A copyright statement for an album from Spotify.
  """
  type SpotifyCopyright {
    """
    The copyright text.
    """
    text: String!

    """
    Whether the copyright is for the work itself or the sound recording
    (performance).
    """
    type: SpotifyCopyrightType!
  }

  """
  A single image from Spotify.
  """
  type SpotifyImage {
    """
    The source URL of the image.
    """
    url: URLString!

    """
    The image width in pixels, if known.
    """
    width: Int

    """
    The image height in pixels, if known.
    """
    height: Int
  }

  """
  A URL for linking to an entity with some third party.
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
  A value for identifying an entity with some third party.
  """
  type SpotifyExternalID {
    """
    The identifier type, for example “isrc”, “ean”, “upc”.
    """
    type: String!

    """
    The identifier value.
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
  The potential values for modality (major or minor) of a track.
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
