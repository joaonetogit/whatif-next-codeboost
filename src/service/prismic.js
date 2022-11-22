import { CreateClient } from '@prismicio/client';

export function getPrismicCient(red) {
  const prismic = createClient(process.env.PRISMIC_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}
