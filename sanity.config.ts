import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemaTypes';
import { deskStructure } from './sanity/deskStructure';

const projectId =
	(typeof process !== 'undefined' ? process.env.SANITY_STUDIO_PROJECT_ID : '') ||
	'';
const dataset =
	(typeof process !== 'undefined' ? process.env.SANITY_STUDIO_DATASET : '') ||
	'production';
const apiVersion =
	(typeof process !== 'undefined' ? process.env.SANITY_STUDIO_API_VERSION : '') ||
	'2026-02-05';

if (!projectId) {
  throw new Error('Missing SANITY_STUDIO_PROJECT_ID in environment.');
}

export default defineConfig({
	name: 'default',
	title: 'Zoftware Blog',
	projectId,
	dataset,
	apiVersion,
  basePath: '/studio',
  plugins: [deskTool({ structure: deskStructure })],
  schema: {
    types: schemaTypes,
  },
});
