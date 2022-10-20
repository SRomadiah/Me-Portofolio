import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Siti Romadiah | Frontend Developer"
        titleTemplate="Siti Romadiah | Frontend Developer"
        defaultTitle="Siti Romadiah | Frontend Developer"
        description="Hey! I'm Siti Romadiah, A Frontend Developer, UI Designer and a Student!"
        openGraph={{
          url: "https://romadiah.vercel.app",
          title: "Siti Romadiah | Frontend Developer",
          description:
            "Hey! I'm Siti Romadiah, A Frontend Developer, UI Designer and a Student!",
          images: [
            {
              url: "",
              width: 800,
              height: 420,
              alt: "Siti Romadiah | Frontend Developer",
            },
          ],
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, romadiah, sitiromadiah, Web Developer, web development, web developer, ui designer, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assets/profile.jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
