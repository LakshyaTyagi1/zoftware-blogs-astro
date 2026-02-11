import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemaTypes";
import { deskStructure } from "./sanity/deskStructure";

const projectId = "vj9ifh8t";
const dataset = "production";
const apiVersion = "2026-02-05";

export default defineConfig({
  name: "default",
  title: "Zoftware Blog",
  projectId,
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [deskTool({ structure: deskStructure })],
  schema: {
    types: schemaTypes,
  },
});
