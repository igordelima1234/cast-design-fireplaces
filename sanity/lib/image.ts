import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './client';

// Only build the URL builder when the client is available
const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export const urlFor = (source: any) => {
  if (!builder) return { url: () => '' };
  return builder.image(source);
};
