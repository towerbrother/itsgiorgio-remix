import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import Footer from './components/molecules/Footer';
import Header from './components/molecules/Header';
import { GlobalStyle } from './globalStyles';

import { footer, header } from './common/mocks';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'itsgiorgio-remix',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <Header {...header} />
        <main>
          <Outlet />
        </main>
        <Footer {...footer} />
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
