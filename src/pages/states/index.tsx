import { Box, Grid, Typography } from '@mui/material';
// import link from nextjs
import Link from 'next/link';

import { WEBSITE_URL } from '@/constants';
import stateSlugs from '@/constants/states';
import Page from '@/layouts/Page';

const NewsletterPage: React.FC = () => {
  function slugToTitleCase(slug: string): string {
    return slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  return (
    <Page title="States | Traded" canonical={`${WEBSITE_URL}/states/`}>
      {/* Heading and description */}
      <Box
        mx="auto"
        sx={{
          bgcolor: 'white',
          px: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: 4,
        }}
      >
        <Box py={6} maxWidth={1200}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6} textAlign="left">
              <Typography
                variant="h1"
                component="h1"
                aria-label="States"
                mb={1}
              >
                <i>States</i>
              </Typography>
              <Typography
                fontSize={[16, 24, 24, 24]}
                lineHeight={['20px', '30px', '30px', '32px']}
                fontWeight={500}
                component="p"
                aria-label="Newsletter"
                mb={1}
              >
                Here are all the states we have transactions for, click on a
                state to see its transactions.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} textAlign="center">
              <img
                src="https://traded.co/wp-content/uploads/2022/04/Map.png"
                alt="Map"
                style={{ maxWidth: '300px', height: 'auto' }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* List of states */}
      <Box
        mx="auto"
        sx={{
          bgcolor: '#f8f8f8',
          px: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 6,
        }}
      >
        <Box maxWidth={1000}>
          <Grid container spacing={2} sx={{ flexWrap: 'wrap' }}>
            {stateSlugs.map((state, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h2" fontSize={[22, 24, 28]}>
                    <Link href={`/states/${state}/`} passHref>
                      <a style={{ textDecoration: 'none', color: 'blue' }}>
                        {slugToTitleCase(state)}
                      </a>
                    </Link>
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Page>
  );
};

export default NewsletterPage;
