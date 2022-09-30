import type { MetaFunction } from '@remix-run/node';
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

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'itsgiorgio-remix',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
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
        <Footer />
        <GlobalStyle />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
