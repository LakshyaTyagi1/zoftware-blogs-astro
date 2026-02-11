import 'dotenv/config';
import { defineCliConfig } from 'sanity/cli';

const projectId =
	process.env.SANITY_PROJECT_ID ||
	process.env.SANITY_STUDIO_PROJECT_ID ||
	process.env.PUBLIC_SANITY_PROJECT_ID ||
	'';
const dataset =
	process.env.SANITY_DATASET ||
	process.env.SANITY_STUDIO_DATASET ||
	process.env.PUBLIC_SANITY_DATASET ||
	'production';

if (!projectId) {
  throw new Error('Missing SANITY_PROJECT_ID or PUBLIC_SANITY_PROJECT_ID in environment.');
}

export default defineCliConfig({
  api: { projectId, dataset },
});
