import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '79pa3wid',
  dataset: 'production',
  apiVersion: '2022-10-24',
  useCdn: false,
});
