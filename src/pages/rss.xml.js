import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";
import { getAllPostsForRss, plainTextFromBlocks } from "../lib/mongodb";

export async function GET(context) {
  const posts = await getAllPostsForRss();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description || plainTextFromBlocks(post.body, 200),
      pubDate: post.publishedAt ? new Date(post.publishedAt) : undefined,
      link: `/${post.slug}/`,
    })),
  });
}
