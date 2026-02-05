// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GIT_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
      static: false
    }
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "md",
        match: {
          include: "*"
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "string",
            name: "pubDate",
            label: "Publish Date"
          },
          {
            type: "string",
            name: "updatedDate",
            label: "Updated Date"
          },
          {
            type: "string",
            name: "categories",
            label: "Categories"
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: "tags"
            }
          },
          {
            type: "string",
            name: "coverImage",
            label: "Cover Image"
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            description: "If checked, this post will not be published"
          },
          {
            type: "string",
            name: "body",
            label: "Content",
            isBody: true,
            ui: {
              component: "textarea"
            }
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
