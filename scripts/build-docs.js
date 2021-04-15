import path from 'path';
import { fileURLToPath } from 'url';
import GraphQL from 'graphql';
import { baseSchema, createSchema } from 'graphbrainz';
import GraphQLMarkdown from 'graphql-markdown';
import extension from '../src/index.js';

const { graphql, getIntrospectionQuery } = GraphQL;
const { updateSchema, diffSchema } = GraphQLMarkdown;

const baseSchemaURL = 'https://github.com/exogen/graphbrainz/docs/types.md';
const schema = createSchema(baseSchema, { extensions: [extension] });

function getSchemaJSON(schema) {
  return graphql(schema, getIntrospectionQuery()).then((result) => result.data);
}

Promise.all([getSchemaJSON(baseSchema), getSchemaJSON(schema)])
  .then(([baseSchemaJSON, schemaJSON]) => {
    const outputSchema = diffSchema(baseSchemaJSON, schemaJSON, {
      processTypeDiff(type) {
        if (type.description === undefined) {
          type.description = `:small_blue_diamond: *This type has been extended.
See the [base schema](${baseSchemaURL}) for a description and additional fields.*`;
        }
        return type;
      },
    });
    const outputPath = path.resolve(
      path.dirname(fileURLToPath(import.meta.url)),
      '../README.md'
    );
    return updateSchema(outputPath, outputSchema, {
      unknownTypeURL: baseSchemaURL,
      headingLevel: 2,
    });
  })
  .catch((err) => {
    console.log('Error:', err);
  });
