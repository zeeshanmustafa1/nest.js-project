import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@emotion/react';
import { LiveChatWidget } from '@livechat/widget-react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { DefaultSeo } from 'next-seo';
import { defaultSeoConfig } from 'next-seo.config';
import Progress from 'nextjs-progressbar';
import { useEffect } from 'react';

import { Footer } from '@/modules/common/footer';
import { useApollo } from '@/modules/core/use-apollo';
import theme from '@/theme';

import * as fbq from '../lib/fpixel';

declare global {
  interface Window {
    wisepops: {
      (command: string, ...args: any[]): void;
      q: any[];
      l: number;
    };
  }
}

const progressBarColor = theme.palette.primary.main;
const DynamicHeader = dynamic<{}>(() =>
  import('@/modules/header').then((comp) => comp.Header)
);

const TradedApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps);
  const router = useRouter();

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
      window.wisepops('pageview');
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
      </Head>
      <DefaultSeo {...defaultSeoConfig} />
      <CssBaseline />
      <ReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      >
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Progress
              height={3}
              showOnShallow
              stopDelayMs={200}
              color={progressBarColor}
            />
            <ApolloProvider client={client}>
              <DynamicHeader />
              <Component {...pageProps} />
              {/* TODO: newsletter & footer */}
              <Footer />
              <LiveChatWidget license="11969823" />
            </ApolloProvider>
          </ThemeProvider>
        </MuiThemeProvider>
      </ReCaptchaProvider>
    </>
  );
};

export default TradedApp;
