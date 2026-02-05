import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z
            .object({
				title: z.string(),
				description: z.string().optional(),
				pubDate: z.coerce.date().optional(),
				// WordPress uses 'date' instead of 'pubDate'
				date: z.coerce.date().optional(),
				updatedDate: z.coerce.date().optional(),
				heroImage: image().optional(),
                // Keep categories as an array of strings. Converter will write arrays when possible.
                // If a single string exists in frontmatter, it will still be treated as invalid by the schema
                // and can be normalized at render time. Using simple array keeps the content schema serializable.
                categories: z.array(z.string()).optional(),
				tags: z.array(z.string()).optional(),
                // Keep coverImage as a plain string (paths live in `public/uploads/`)
                coverImage: z.string().optional(),
				draft: z.boolean().optional().default(false),
            }).passthrough()
});

export const collections = { blog };
