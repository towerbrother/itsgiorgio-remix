import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'ndac043j',
  dataset: 'production',
  apiVersion: '2022-09-29',
  useCdn: false,
});
