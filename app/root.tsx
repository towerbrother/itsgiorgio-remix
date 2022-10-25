import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import sanityClient from '~/sanity';
import Footer from './components/molecules/Footer';
import Header from './components/molecules/Header';
import { GlobalStyle } from './globalStyles';
import type { HeaderType, FooterType } from './models/types';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'itsgiorgio-remix',
  viewport: 'width=device-width,initial-scale=1',
});

export const loader: LoaderFunction = async () => {
  const footer = await sanityClient.fetch(`*[_type == "footer"]`);
  const header = await sanityClient.fetch(`*[_type == "header"]`);

  return json({ footer, header });
};

export default function App() {
  const { footer, header } = useLoaderData();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        {header.map((item: HeaderType) => (
          <React.Fragment key={uuidv4()}>
            <Header {...item} />
          </React.Fragment>
        ))}
        <Outlet />
        {footer.map((item: FooterType) => (
          <React.Fragment key={uuidv4()}>
            <Footer {...item} />
          </React.Fragment>
        ))}
        <GlobalStyle />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div>Oh no! Something went wrong...</div>
        <Scripts />
      </body>
    </html>
  );
}
