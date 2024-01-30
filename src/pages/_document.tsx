import createEmotionServer from '@emotion/server/create-instance';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import createEmotionCache from '@/createEmotionCache';

import { FB_PIXEL_ID } from '../lib/fpixel';

class TradedAppDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang="en-US">
        <Head>
          {/* Google Tag Initialization */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
            `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              <script defer src="//loader.wisepops.com/get-loader.js?v=1&amp;site=Sz2EuFAyxN"></script>
              `,
            }}
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            href="/apple-touch-icon.png"
            key="apple"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
            key="icon32"
          />

          {/*
            TODO: GET Favicon 16x16 and .ICO
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-32x32.png"
            key="icon16"
            />
          <link
            rel="icon"
            href="/favicon.ico"
            key="favicon"
          /> */}
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>

          {/* AcciseBe */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(){ var s = document.createElement('script'), e = ! document.body ? document.querySelector('head') : document.body; s.src = "https://acsbapp.com/apps/app/dist/js/app.js"; s.async = true; s.onload = () => { acsbJS.init({ statementLink : '', feedbackLink : '', footerHtml : '', hideMobile : true, hideTrigger : false, disableBgProcess : true, language : 'en', position : 'right', leadColor : '#146FF8', triggerColor : '#146FF8', triggerRadius : '50%', triggerPositionX : 'right', triggerPositionY : 'bottom', triggerIcon : 'people', triggerSize : 'medium', triggerOffsetX : 20, triggerOffsetY : 20, mobile : { triggerSize : 'small', triggerPositionX : 'right', triggerPositionY : 'bottom', triggerOffsetX : 10, triggerOffsetY : 10, triggerRadius : '50%' } }); }; e.appendChild(s); })();
              `,
            }}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              var style = document.createElement('style');
              style.textContent = '.acsb-trigger { width: 56px !important; height: 56px !important; }';
              document.head.appendChild(style);
            `,
            }}
          />
        </Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}`}
        ></script>

        <body>
          <Main />
          <NextScript />
          <script
            data-cfasync="false"
            dangerouslySetInnerHTML={{
              __html: `
              (function(W,i,s,e,P,o,p){
                W['WisePopsObject']=P;
                W[P]=W[P]||function(){
                  (W[P].q=W[P].q||[]).push(arguments)
                };
                W[P].l=1*new Date();
                o=i.createElement(s);
                p=i.getElementsByTagName(s)[0];
                o.defer=1;
                o.src=e;
                p.parentNode.insertBefore(o,p)
              })(window,document,'script','//loader.wisepops.com/get-loader.js?v=1&site=Sz2EuFAyxN','wisepops');
            `,
            }}
          />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
TradedAppDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

export default TradedAppDocument;
