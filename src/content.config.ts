import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z
			.object({
				title: z.string(),
				description: z.string().optional(),
				// Transform string to Date object
				pubDate: z.coerce.date().optional(),
				// WordPress uses `date` instead of `pubDate`
				date: z.coerce.date().optional(),
				updatedDate: z.coerce.date().optional(),
				heroImage: image().optional(),
				// WordPress cover image path (relative to public/uploads/)
				coverImage: z.string().optional(),
				// Categories can be a string or array in WordPress exports
				categories: z.union([z.array(z.string()), z.string()]).optional(),
				// Tags can be a string or array in WordPress exports
				tags: z.union([z.array(z.string()), z.string()]).optional(),
				// Draft status
				draft: z.boolean().optional().default(false),
			})
			.transform((data) => ({
				...data,
				pubDate: data.pubDate ?? data.date,
				description: data.description ?? '',
				// Normalize categories to always be an array
				categories: typeof data.categories === 'string' 
					? [data.categories] 
					: data.categories,
				// Normalize tags to always be an array
				tags: typeof data.tags === 'string'
					? [data.tags]
					: data.tags,
			})),
});

export const collections = { blog };
