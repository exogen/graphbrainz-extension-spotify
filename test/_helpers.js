import { graphql } from 'graphql';
import {
  MusicBrainz,
  baseSchema,
  createSchema,
  createContext,
} from 'graphbrainz';
import extension from '../src/index.js';

const NOCK_MODE = process.env.NOCK_MODE || 'play';
const rateLimit = NOCK_MODE === 'play' ? { limit: Infinity, period: 0 } : {};
const client = new MusicBrainz({ ...rateLimit });
export const options = {
  client,
  spotify: { ...rateLimit },
  extensions: [extension],
};
export const schema = createSchema(baseSchema, options);
export const context = createContext(options);

export function runQuery(query, variables) {
  return graphql(schema, query, null, context, variables);
}

export function testQuerySnapshot(t, query, variables) {
  return runQuery(query, variables).then(
    (result) => {
      if (result.errors) {
        result.errors.forEach((error) => t.log(error));
      }
      t.snapshot(result);
    },
    (err) => t.snapshot(err)
  );
}
