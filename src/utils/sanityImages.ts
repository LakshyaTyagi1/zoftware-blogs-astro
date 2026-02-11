import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Build Sanity CDN image URLs using only projectId + dataset.
// This never makes API calls — the URL builder constructs CDN URLs locally.
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";

const builder = imageUrlBuilder({ projectId, dataset });

export function getSanityImageUrl(
  source: SanityImageSource | undefined,
  options: { width?: number; height?: number } = {},
): string {
  if (!source) return "";
  let image = builder.image(source).auto("format");
  if (options.width) image = image.width(options.width);
  if (options.height) image = image.height(options.height);
  return image.url();
}
