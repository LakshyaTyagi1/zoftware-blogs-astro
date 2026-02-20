import imageUrlBuilder from '@sanity/image-url';

const projectId = "vj9ifh8t";
const dataset = "production";
const builder = imageUrlBuilder({ projectId, dataset });
function getSanityImageUrl(source, options = {}) {
  if (!source) return "";
  let image = builder.image(source).auto("format");
  if (options.width) image = image.width(options.width);
  if (options.height) image = image.height(options.height);
  return image.url();
}

export { getSanityImageUrl as g };
