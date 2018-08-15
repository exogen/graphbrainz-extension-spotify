# GraphBrainz Extension: Spotify

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
</tbody>
</table>

#### SpotifyAlbum

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
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uri</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>href</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#urlstring">URLString</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>albumType</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#releasegrouptype">ReleaseGroupType</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artists</strong></td>
<td valign="top">[<a href="#spotifyartist">SpotifyArtist</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>availableMarkets</strong></td>
<td valign="top">[<a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>copyrights</strong></td>
<td valign="top">[<a href="#spotifycopyright">SpotifyCopyright</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalIDs</strong></td>
<td valign="top">[<a href="#spotifyexternalid">SpotifyExternalID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalURLs</strong></td>
<td valign="top">[<a href="#spotifyexternalurl">SpotifyExternalURL</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>genres</strong></td>
<td valign="top">[<a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#spotifyimage">SpotifyImage</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>label</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>popularity</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>releaseDate</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#date">Date</a></td>
<td></td>
</tr>
</tbody>
</table>

#### SpotifyArtist

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
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>relatedArtists</strong></td>
<td valign="top">[<a href="#spotifyartist">SpotifyArtist</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

#### SpotifyAudioFeatures

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
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top"><a href="#spotifycopyrighttype">SpotifyCopyrightType</a>!</td>
<td></td>
</tr>
</tbody>
</table>

#### SpotifyExternalID

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
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

#### SpotifyExternalURL

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
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#urlstring">URLString</a>!</td>
<td></td>
</tr>
</tbody>
</table>

#### SpotifyImage

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
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>width</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>height</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

#### SpotifyTrack

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
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>uri</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>href</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#urlstring">URLString</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>title</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>audioFeatures</strong></td>
<td valign="top"><a href="#spotifyaudiofeatures">SpotifyAudioFeatures</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>album</strong></td>
<td valign="top"><a href="#spotifyalbum">SpotifyAlbum</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>artists</strong></td>
<td valign="top">[<a href="#spotifyartist">SpotifyArtist</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>availableMarkets</strong></td>
<td valign="top">[<a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>discNumber</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#duration">Duration</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>explicit</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalIDs</strong></td>
<td valign="top">[<a href="#spotifyexternalid">SpotifyExternalID</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalURLs</strong></td>
<td valign="top">[<a href="#spotifyexternalurl">SpotifyExternalURL</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>popularity</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>previewURL</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#urlstring">URLString</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>trackNumber</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#int">Int</a>!</td>
<td></td>
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

#### SpotifyTrackMode

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
