import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import sanityClient from '~/sanity';

export const loader: LoaderFunction = async () => {
  const banners = await sanityClient.fetch(`*[_type == "banner"]`);
  const contactForms = await sanityClient.fetch(`*[_type == "contactForm"]`);
  const headers = await sanityClient.fetch(`*[_type == "header"]`);
  const keywords = await sanityClient.fetch(`*[_type == "keywords"]`);
  const stages = await sanityClient.fetch(`*[_type == "stage"]`);
  const htmlTexts = await sanityClient.fetch(`*[_type == "htmlText"]`);
  const timelines = await sanityClient.fetch(`*[_type == "timeline"]`);

  return json({
    banners,
    contactForms,
    headers,
    keywords,
    stages,
    htmlTexts,
    timelines,
  });
};

export default function Index() {
  const data = useLoaderData();

  return (
    <main>
      <div>
        <h1>Banner</h1>
        {data.banners.map((item) => (
          <span key={item.title}>{item.title}</span>
        ))}
      </div>
      <div>
        <h1>Contact Form</h1>
        {data.contactForms.map((item) => (
          <span key={item.title}>{item.title}</span>
        ))}
      </div>
      <div>
        <h1>Header</h1>
        {data.headers.map((item) => (
          <span key={item.title}>{item.title}</span>
        ))}
      </div>
      <div>
        <h1>Keywords</h1>
        {data.keywords.map((item) => (
          <span key={item.title}>{item.title}</span>
        ))}
      </div>
      <div>
        <h1>Stage</h1>
        {data.stages.map((item) => (
          <span key={item.title}>{item.title}</span>
        ))}
      </div>
      <div>
        <h1>Timeline</h1>
        {data.timelines.map((item) => (
          <span key={item.title}>{item.title}</span>
        ))}
      </div>
      <div>
        <h1>HTML TEXT</h1>
        {data.htmlTexts.map((item) => (
          <span key={item.title}>{item.title}</span>
        ))}
      </div>
    </main>
  );
}
