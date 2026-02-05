import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.GIT_BRANCH || 'main',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'uploads',
      static: false,
    },
  },

  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Blog Posts',
        path: 'src/content/blog',
        format: 'md',
        match: {
          include: '*',
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            type: 'string',
            name: 'pubDate',
            label: 'Publish Date',
            required: false,
          },
          {
            type: 'string',
            name: 'updatedDate',
            label: 'Updated Date',
            required: false,
          },
          {
            type: 'string',
            name: 'categories',
            label: 'Categories',
            required: false,
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
            required: false,
          },
          {
            type: 'string',
            name: 'coverImage',
            label: 'Cover Image',
            required: false,
          },
          {
            type: 'boolean',
            name: 'draft',
            label: 'Draft',
            description: 'If checked, this post will not be published',
          },
          {
            type: 'string',
            name: 'body',
            label: 'Content',
            isBody: true,
            required: true,
          },
        ],
      },
    ],
  },
});
