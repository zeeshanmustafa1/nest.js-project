import { Box, Typography } from '@mui/material';
import Head from 'next/head';

import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';

const MediaKitEmbedPage: React.FC = () => {
  return (
    <Page title="Media Kit | Traded" canonical={`${WEBSITE_URL}/media-kit/`}>
      <div>
        <Head>
          <title>Media Kit | Traded</title>
          <script
            async
            src="https://www.canva.com/design/DAFReBDA9rQ/view?embed"
          ></script>
        </Head>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          position="relative"
          height="90vh"
          textAlign="center"
          sx={{
            padding: { sm: '0rem 10rem', md: '0rem 20rem' },
          }}
        >
          <Typography variant="h1" marginBottom="30px">
            Media Kit
          </Typography>

          <iframe
            loading="lazy"
            style={{
              width: '100%',
              height: '70%',
              border: 'none',
            }}
            allowFullScreen
            allow="fullscreen"
            data-rocket-lazyload="fitvidscompatible"
            src="https://www.canva.com/design/DAFReBDA9rQ/view?embed"
            data-lazy-src="https://www.canva.com/design/DAFReBDA9rQ/view?embed"
            data-ll-status="loaded"
            className="entered lazyloaded"
          />
          <Typography variant="body" marginTop="1rem">
            <a
              target="_blank"
              href="https://www.canva.com/design/DAFReBDA9rQ/view?utm_content=DAFReBDA9rQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
              rel="noreferrer"
            >
              Traded: 2023 Media Kit
            </a>{' '}
            by Traded Media
          </Typography>
        </Box>
      </div>
    </Page>
  );
};

export default MediaKitEmbedPage;
