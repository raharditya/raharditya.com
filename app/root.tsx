import { useEffect } from 'react';
import { LinksFunction, LoaderFunction } from '@remix-run/node';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, json, useLoaderData, useLocation } from '@remix-run/react';
import * as gtag from 'app/lib/utils/gtag.client';

import tailwind from './styles/tailwind.css?url';
import global from './styles/global.css?url';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwind },
    { rel: 'stylesheet', href: global },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ];
};

export const loader: LoaderFunction = async () => {
  return json({
    gtagId: process.env.GTAG_ID,
  });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const data = useLoaderData<typeof loader>();

  useEffect(() => {
    if (!data.gtagId) return;
    gtag.pageview(location.pathname, data.gtagId);
  }, [location.pathname, data.gtagId]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${data.gtagId}`}></script>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${data.gtagId}');
            `,
          }}
        />
      </head>
      <body className="font-jakarta">
        {children}
        <ScrollRestoration />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        /> */}
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
