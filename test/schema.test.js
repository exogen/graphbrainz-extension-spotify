import test from 'ava';
import { setupTests } from 'ava-nock';
import { testQuerySnapshot } from './_helpers.js';

setupTests();

test(
  'MusicBrainz recordings have a spotify track field',
  testQuerySnapshot,
  `
    {
      lookup {
        recording(mbid: "6c128cd9-94da-44fe-b74f-b68079fb1606") {
          spotify {
            title
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
  `
);
