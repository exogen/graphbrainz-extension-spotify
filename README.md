# GraphBrainz Extension: Spotify

[![npm version](https://img.shields.io/npm/v/graphbrainz-extension-spotify.svg)](https://www.npmjs.com/package/graphbrainz-extension-spotify)
[![license](https://img.shields.io/npm/l/graphbrainz-extension-spotify.svg)](https://github.com/exogen/graphbrainz-extension-spotify/blob/master/LICENSE)

Retrieve information about MusicBrainz entities from [Spotify](https://www.spotify.com/)
using GraphQL, calling the [Spotify Web API](https://developer.spotify.com/documentation/web-api/)
under the hood. This project has no affiliation with Spotify.

The extension works by finding Spotify URLs in an entity’s URL relationships.
The URL relationship must have the `streaming music` type and point to a Spotify
entity of the appropriate type: `artist` for artists, `album` for releases, and
`track` for recordings.

**[Try out the live demo!][demo]** :bulb: Use the “Docs” sidebar or the
documentation below to help construct your query.

## Installation

To use this extension, install [GraphBrainz](https://github.com/exogen/graphbrainz),
then:

```console
$ npm install graphbrainz-extension-spotify
$ GRAPHBRAINZ_EXTENSIONS='["graphbrainz-extension-spotify"]' graphbrainz
```

Or, if you are using the middleware directly:

```js
import graphbrainz from 'graphbrainz'

const middleware = graphbrainz({
  // Don't forget to add the other extensions you use, too.
  extensions: ['graphbrainz-extension-spotify']
})
```

## Configuration

This extension can be configured using environment variables:

- **`SPOTIFY_CLIENT_ID`**: The Spotify client ID to use. This is required.
- **`SPOTIFY_CLIENT_SECRET`**: The Spotify client secret to use. This is
  required.
- **`SPOTIFY_BASE_URL`**: The base URL at which to access the Spotify API.
  Defaults to `https://api.spotify.com/v1/`.
- **`SPOTIFY_CACHE_SIZE`**: The number of items to keep in the cache. Defaults to
  `GRAPHBRAINZ_CACHE_SIZE` if defined, or `8192`.
- **`SPOTIFY_CACHE_TTL`**: The number of seconds to keep items in the cache.
  Defaults to `GRAPHBRAINZ_CACHE_TTL` if defined, or `86400000` (one day).

This extension uses its own cache, separate from the MusicBrainz loader cache.

## Example Queries

Get the audio features and related artists for a track ([try it](<https://graphbrainz-extension-spotify.herokuapp.com/?query=%7B%0A%20%20lookup%20%7B%0A%20%20%20%20recording(mbid%3A%20%226c128cd9-94da-44fe-b74f-b68079fb1606%22)%20%7B%0A%20%20%20%20%20%20spotify%20%7B%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20previewURL%0A%20%20%20%20%20%20%20%20audioFeatures%20%7B%0A%20%20%20%20%20%20%20%20%20%20acousticness%0A%20%20%20%20%20%20%20%20%20%20danceability%0A%20%20%20%20%20%20%20%20%20%20duration%0A%20%20%20%20%20%20%20%20%20%20energy%0A%20%20%20%20%20%20%20%20%20%20instrumentalness%0A%20%20%20%20%20%20%20%20%20%20keyName%0A%20%20%20%20%20%20%20%20%20%20liveness%0A%20%20%20%20%20%20%20%20%20%20loudness%0A%20%20%20%20%20%20%20%20%20%20mode%0A%20%20%20%20%20%20%20%20%20%20speechiness%0A%20%20%20%20%20%20%20%20%20%20tempo%0A%20%20%20%20%20%20%20%20%20%20timeSignature%0A%20%20%20%20%20%20%20%20%20%20valence%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20artists%20%7B%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20relatedArtists%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20href%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)):

```graphql
{
  lookup {
    recording(mbid: "6c128cd9-94da-44fe-b74f-b68079fb1606") {
      spotify {
        title
        previewURL
        audioFeatures {
          acousticness
          danceability
          duration
          energy
          instrumentalness
          keyName
          liveness
          loudness
          mode
          speechiness
          tempo
          timeSignature
          valence
        }
        artists {
          name
          relatedArtists {
            name
            href
          }
        }
      }
    }
  }
}
```

<!-- START graphql-markdown -->

## Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Objects](#objects)
    * [Artist](#artist)
    * [Recording](#recording)
    * [Release](#release)
    * [SpotifyAlbum](#spotifyalbum)
    * [SpotifyArtist](#spotifyartist)
    * [SpotifyAudioFeatures](#spotifyaudiofeatures)
    * [SpotifyCopyright](#spotifycopyright)
    * [SpotifyExternalID](#spotifyexternalid)
    * [SpotifyExternalURL](#spotifyexternalurl)
    * [SpotifyImage](#spotifyimage)
    * [SpotifyTrack](#spotifytrack)
  * [Enums](#enums)
    * [SpotifyCopyrightType](#spotifycopyrighttype)
    * [SpotifyMatchStrategy](#spotifymatchstrategy)
    * [SpotifyTrackMode](#spotifytrackmode)

</details>

### Objects

#### Artist

:small_blue_diamond: *This type has been extended.
See the [base schema](https://github.com/exogen/graphbrainz/docs/types.md) for a description and additional fields.*

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>spotify</strong></td>
<td valign="top"><a href="#spotifyartist">SpotifyArtist</a></td>
<td>

The artist’s entry on Spotify.

</td>
</tr>
</tbody>
</table>

#### Recording

:small_blue_diamond: *This type has been extended.
See the [base schema](https://github.com/exogen/graphbrainz/docs/types.md) for a description and additional fields.*

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>spotify</strong></td>
<td valign="top"><a href="#spotifytrack">SpotifyTrack</a></td>
<td>

The recording’s entry on Spotify.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategy</td>
<td valign="top">[<a href="#spotifymatchstrategy">SpotifyMatchStrategy</a>!]</td>
<td>

The strategies to use to match the recording with a Spotify track, in
preferential order.

</td>
</tr>
</tbody>
</table>

#### Release

:small_blue_diamond: *This type has been extended.
See the [base schema](https://github.com/exogen/graphbrainz/docs/types.md) for a description and additional fields.*

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>spotify</strong></td>
<td valign="top"><a href="#spotifyalbum">SpotifyAlbum</a></td>
<td>

The release’s entry on Spotify.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">strategy</td>
<td valign="top">[<a href="#spotifymatchstrategy">SpotifyMatchStrategy</a>!]</td>
<td>

The strategies to use to match the release with a Spotify album, in
preferential order.

</td>
</tr>
</tbody>
</table>

#### SpotifyAlbum

An album from Spotify.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>albumID</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#id">ID</a>!</td>
<td>

The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
for the album.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uri</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td>

The [Spotify URI](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
for the album.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>href</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#urlstring">URLString</a>!</td>
<td>

A link to the Web API endpoint providing full details of the album.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a></td>
<td>

The name of the album. In case of an album takedown, the value may be empty.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>albumType</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#releasegrouptype">ReleaseGroupType</a>!</td>
<td>

The type of the album, e.g. “Album”, “Single”, “Compilation”.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artists</strong></td>
<td valign="top">[<a href="#spotifyartist">SpotifyArtist</a>!]!</td>
<td>

The artists of the album.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>availableMarkets</strong></td>
<td valign="top">[<a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!]!</td>
<td>

The markets in which the album is available: [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
country codes.

Note that an album is considered available in a market when at least 1 of its tracks is available in that market.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>copyrights</strong></td>
<td valign="top">[<a href="#spotifycopyright">SpotifyCopyright</a>!]!</td>
<td>

The copyright statements of the album.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalIDs</strong></td>
<td valign="top">[<a href="#spotifyexternalid">SpotifyExternalID</a>!]!</td>
<td>

Known external IDs for the album.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalURLs</strong></td>
<td valign="top">[<a href="#spotifyexternalurl">SpotifyExternalURL</a>!]!</td>
<td>

Known external URLs for this album.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>genres</strong></td>
<td valign="top">[<a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!]!</td>
<td>

A list of the genres used to classify the album. For example: “Prog Rock”,
“Post-Grunge”. (If not yet classified, the array is empty.)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#spotifyimage">SpotifyImage</a>!]!</td>
<td>

The cover art for the album in various sizes, widest first.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>label</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a></td>
<td>

The label for the album.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>popularity</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#int">Int</a>!</td>
<td>

The popularity of the album. The value will be between 0 and 100, with 100
being the most popular. The popularity is calculated from the popularity of
the album’s individual tracks.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releaseDate</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#date">Date</a></td>
<td>

The date the album was first released, for example “1981-12-15”. Depending
on the precision, the month or day might be missing.

</td>
</tr>
</tbody>
</table>

#### SpotifyArtist

An artist from Spotify.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>artistID</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#id">ID</a>!</td>
<td>

The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
for the artist.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uri</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td>

The [Spotify URI](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
for the artist.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>href</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#urlstring">URLString</a>!</td>
<td>

A link to the Web API endpoint providing full details of the artist.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td>

The name of the artist.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalURLs</strong></td>
<td valign="top">[<a href="#spotifyexternalurl">SpotifyExternalURL</a>!]!</td>
<td>

Known external URLs for this artist.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>genres</strong></td>
<td valign="top">[<a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!]!</td>
<td>

A list of the genres the artist is associated with. For example:
“Prog Rock”, “Post-Grunge”. (If not yet classified, the array is empty.)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>popularity</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#int">Int</a>!</td>
<td>

The popularity of the artist. The value will be between 0 and 100, with 100
being the most popular. The artist’s popularity is calculated from the
popularity of all the artist’s tracks.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#spotifyimage">SpotifyImage</a>!]!</td>
<td>

Images of the artist in various sizes, widest first.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>topTracks</strong></td>
<td valign="top">[<a href="#spotifytrack">SpotifyTrack</a>!]!</td>
<td>

Spotify catalog information about an artist’s top tracks by country.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">market</td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td>

An [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
country code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedArtists</strong></td>
<td valign="top">[<a href="#spotifyartist">SpotifyArtist</a>!]!</td>
<td>

Spotify catalog information about artists similar to a given artist.
Similarity is based on analysis of the Spotify community’s listening
history.

</td>
</tr>
</tbody>
</table>

#### SpotifyAudioFeatures

The audio features of a track from Spotify.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>acousticness</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td>

A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0
represents high confidence the track is acoustic.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>danceability</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td>

Danceability describes how suitable a track is for dancing based on a
combination of musical elements including tempo, rhythm stability, beat
strength, and overall regularity. A value of 0.0 is least danceable and 1.0
is most danceable.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#duration">Duration</a>!</td>
<td>

The duration of the track in milliseconds.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>energy</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td>

Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of
intensity and activity. Typically, energetic tracks feel fast, loud, and
noisy. For example, death metal has high energy, while a Bach prelude scores
low on the scale. Perceptual features contributing to this attribute include
dynamic range, perceived loudness, timbre, onset rate, and general entropy.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>instrumentalness</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td>

Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are
treated as instrumental in this context. Rap or spoken word tracks are
clearly “vocal”. The closer the instrumentalness value is to 1.0, the
greater likelihood the track contains no vocal content. Values above 0.5 are
intended to represent instrumental tracks, but confidence is higher as the
value approaches 1.0.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#int">Int</a>!</td>
<td>

The key the track is in. Integers map to pitches using standard [Pitch Class
notation](https://en.wikipedia.org/wiki/Pitch_class), e.g. 0 = C, 1 = C♯/D♭,
2 = D, and so on. See the `keyName` field if you’d prefer the note as a
string.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>keyName</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td>

The `key` translated from an integer to a name like “C”. (Only one name
will be returned, so enharmonic notes like like C♯/D♭ will just return
“C♯”.)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>liveness</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td>

Detects the presence of an audience in the recording. Higher liveness values
represent an increased probability that the track was performed live. A
value above 0.8 provides strong likelihood that the track is live.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loudness</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td>

The overall loudness of a track in decibels (dB). Loudness values are
averaged across the entire track and are useful for comparing relative
loudness of tracks. Loudness is the quality of a sound that is the primary
psychological correlate of physical strength (amplitude). Values typical
range between -60 and 0 db.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mode</strong></td>
<td valign="top"><a href="#spotifytrackmode">SpotifyTrackMode</a>!</td>
<td>

Mode indicates the modality (major or minor) of a track, the type of scale
from which its melodic content is derived. Major is represented by 1 and
minor is 0.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>speechiness</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td>

Speechiness detects the presence of spoken words in a track. The more
exclusively speech-like the recording (e.g. talk show, audio book, poetry),
the closer to 1.0 the attribute value. Values above 0.66 describe tracks
that are probably made entirely of spoken words. Values between 0.33 and
0.66 describe tracks that may contain both music and speech, either in
sections or layered, including such cases as rap music. Values below 0.33
most likely represent music and other non-speech-like tracks.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tempo</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td>

The overall estimated tempo of a track in beats per minute (BPM). In musical
terminology, tempo is the speed or pace of a given piece and derives
directly from the average beat duration.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timeSignature</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td>

An estimated overall time signature of a track. The time signature (meter)
is a notational convention to specify how many beats are in each bar (or
measure).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valence</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td>

A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a
track. Tracks with high valence sound more positive (e.g. happy, cheerful,
euphoric), while tracks with low valence sound more negative (e.g. sad,
depressed, angry).

</td>
</tr>
</tbody>
</table>

#### SpotifyCopyright

A copyright statement for an album from Spotify.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td>

The copyright text.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#spotifycopyrighttype">SpotifyCopyrightType</a>!</td>
<td>

Whether the copyright is for the work itself or the sound recording
(performance).

</td>
</tr>
</tbody>
</table>

#### SpotifyExternalID

A value for identifying an entity with some third party.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td>

The identifier type, for example “isrc”, “ean”, “upc”.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td>

The identifier value.

</td>
</tr>
</tbody>
</table>

#### SpotifyExternalURL

A URL for linking to an entity with some third party.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td>

The type of the URL, for example “spotify”.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#urlstring">URLString</a>!</td>
<td>

An external, public URL to the object.

</td>
</tr>
</tbody>
</table>

#### SpotifyImage

A single image from Spotify.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#urlstring">URLString</a>!</td>
<td>

The source URL of the image.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>width</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#int">Int</a></td>
<td>

The image width in pixels, if known.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>height</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#int">Int</a></td>
<td>

The image height in pixels, if known.

</td>
</tr>
</tbody>
</table>

#### SpotifyTrack

A track from Spotify.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>trackID</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#id">ID</a>!</td>
<td>

The [Spotify ID](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
for the track.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uri</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td>

The [Spotify URI](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids)
for the track.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>href</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#urlstring">URLString</a>!</td>
<td>

A link to the Web API endpoint providing full details of the track.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td>

The name of the track.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>audioFeatures</strong></td>
<td valign="top"><a href="#spotifyaudiofeatures">SpotifyAudioFeatures</a></td>
<td>

The audio features of the track.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>album</strong></td>
<td valign="top"><a href="#spotifyalbum">SpotifyAlbum</a></td>
<td>

The album on which the track appears.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artists</strong></td>
<td valign="top">[<a href="#spotifyartist">SpotifyArtist</a>!]!</td>
<td>

The artists who performed the track.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>availableMarkets</strong></td>
<td valign="top">[<a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!]!</td>
<td>

A list of the countries in which the track can be played, identified by
their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
code.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discNumber</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#int">Int</a>!</td>
<td>

The disc number (usually `1` unless the album consists of more than one
disc).

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#duration">Duration</a>!</td>
<td>

The track length in milliseconds.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>explicit</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#boolean">Boolean</a></td>
<td>

Whether or not the track has explicit lyrics, if known.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalIDs</strong></td>
<td valign="top">[<a href="#spotifyexternalid">SpotifyExternalID</a>!]!</td>
<td>

Known external IDs for the track.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalURLs</strong></td>
<td valign="top">[<a href="#spotifyexternalurl">SpotifyExternalURL</a>!]!</td>
<td>

Known external URLs for the track.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>popularity</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#int">Int</a>!</td>
<td>

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

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>previewURL</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#urlstring">URLString</a></td>
<td>

A link to a 30 second preview (MP3 format) of the track, if available.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trackNumber</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#int">Int</a>!</td>
<td>

The number of the track. If an album has several discs, the track number is
the number on the specified disc.

</td>
</tr>
</tbody>
</table>

### Enums

#### SpotifyCopyrightType

The type of copyright.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>COPYRIGHT</strong></td>
<td>

The copyright.

</td>
</tr>
<tr>
<td valign="top"><strong>PERFORMANCE</strong></td>
<td>

The sound recording (performance) copyright.

</td>
</tr>
</tbody>
</table>

#### SpotifyMatchStrategy

Strategies for matching MusicBrainz entities to Spotify entities.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>URL</strong></td>
<td>

The entity will be matched by finding an explicit URL relationship that
links to Spotify.

</td>
</tr>
<tr>
<td valign="top"><strong>EXTERNALID</strong></td>
<td>

The entity will be matched by searching for Spotify entities by some
external ID that is known to both MusicBrainz and Spotify, like an ISRC
or UPC barcode. Since this can result in multiple Spotify matches, the most
popular will be preferred (if possible), or the first.

</td>
</tr>
</tbody>
</table>

#### SpotifyTrackMode

The potential values for modality (major or minor) of a track.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>MAJOR</strong></td>
<td>

The major scale.

</td>
</tr>
<tr>
<td valign="top"><strong>MINOR</strong></td>
<td>

The minor scale.

</td>
</tr>
</tbody>
</table>

<!-- END graphql-markdown -->

[demo]: http://graphbrainz-extension-spotify.herokuapp.com/
