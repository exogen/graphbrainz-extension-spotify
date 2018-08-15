# GraphBrainz Extension: Spotify

<!-- START graphql-markdown -->

## Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Objects](#objects)
    * [Artist](#artist)
    * [Recording](#recording)
    * [SpotifyArtist](#spotifyartist)
    * [SpotifyImage](#spotifyimage)
    * [SpotifyTrack](#spotifytrack)
    * [SpotifyTrackFeatures](#spotifytrackfeatures)
    * [SpotifyURL](#spotifyurl)
  * [Enums](#enums)
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
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>externalURLs</strong></td>
<td valign="top">[<a href="#spotifyurl">SpotifyURL</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>genres</strong></td>
<td valign="top">[<a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>popularity</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>images</strong></td>
<td valign="top">[<a href="#spotifyimage">SpotifyImage</a>!]!</td>
<td></td>
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
<td colspan="2" valign="top"><strong>features</strong></td>
<td valign="top"><a href="#spotifytrackfeatures">SpotifyTrackFeatures</a></td>
<td></td>
</tr>
</tbody>
</table>

#### SpotifyTrackFeatures

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
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>danceability</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>duration</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#duration">Duration</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>energy</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>instrumentalness</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>keyName</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>liveness</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>loudness</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mode</strong></td>
<td valign="top"><a href="#spotifytrackmode">SpotifyTrackMode</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>speechiness</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>tempo</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>timeSignature</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>valence</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#float">Float</a>!</td>
<td></td>
</tr>
</tbody>
</table>

#### SpotifyURL

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

### Enums

#### SpotifyTrackMode

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>MAJOR</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>MINOR</strong></td>
<td></td>
</tr>
</tbody>
</table>

<!-- END graphql-markdown -->
