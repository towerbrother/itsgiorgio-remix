import { json, LoaderFunction, MetaFunction } from '@remix-run/node';
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
import sanityClient from '~/sanity';
import Footer from './components/molecules/Footer';
import Header from './components/molecules/Header';
import { GlobalStyle } from './globalStyles';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'itsgiorgio-remix',
  viewport: 'width=device-width,initial-scale=1',
});

export const loader: LoaderFunction = async () => {
  const footer = await sanityClient.fetch(`*[_type == "footer"]`);

  return json(footer);
};

export default function App() {
  const footer = useLoaderData();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <Header />
        <Outlet />
        {/* TODO: generate TS models */}
        {footer.map((e) => (
          <React.Fragment key={e.copyright}>
            <Footer copyright={e.copyright} />
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
