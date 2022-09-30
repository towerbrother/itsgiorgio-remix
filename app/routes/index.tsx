import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { Animal } from '~/models/sanity-generated';
import sanityClient from '~/sanity';

export const loader: LoaderFunction = async () => {
  const animals = await sanityClient.fetch(`*[_type == "animal"]`);

  return json(animals);
};

export default function Index() {
  const animals = useLoaderData();
  console.log({ animals });

  return (
    <main>
      <div>Stage</div>
      <div>Intro</div>
      <div>Endorsments</div>
      <h1>Products</h1>
      {animals.map((animal: Animal) => (
        <span key={animal.name}>
          {animal.name}-{animal.age}
        </span>
      ))}
    </main>
  );
}
