import { gql } from '@apollo/client';
import { Box, ListItem, Typography } from '@mui/material';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';
import { initializeApollo } from '@/modules/core/use-apollo';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const client = initializeApollo(ctx);

  const { data } = await client.query({
    query: gql`
      query Transfers {
        transfers(state: "Miami") {
          edges {
            node {
              link
              state
              title
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      data,
    },
  };
};

type MiamiTransfersStaticProps = InferGetStaticPropsType<typeof getStaticProps>;

const MiamiTransfersPage: React.FC<MiamiTransfersStaticProps> = ({ data }) => {
  return (
    <Page
      title="Miami Property Transfers | Traded"
      canonical={`${WEBSITE_URL}/transfers/miami-property-transfers/`}
    >
      <Box
        width="100%"
        marginY="50px"
        paddingX="50px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box display="flex" flexDirection="row" width="90%">
          <Typography fontSize={[24, 24, 32]} fontWeight={500} component="h1">
            Miami Property Transfers
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          width="90%"
          marginY="20px"
          padding="10px"
        >
          <ListItem sx={{ display: 'list-item' }}>
            <strong>Weekly Transfers:</strong> Below is a list of weekly Florida
            transfers.
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>Research:</strong> Traded’s research team unveils all the
            entities involved in every transaction to show who is buyer &
            seller.
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>Condo/Co-Op Note:</strong> If an address has a red line on
            the left side its a condo or co-op.
          </ListItem>
          {data?.transfers?.edges?.map((transfer: any, index: number) => (
            <Box key={index}>
              <iframe
                width="100%"
                height="600px"
                style={{ border: '1px solid gray' }}
                src={`${transfer?.node?.link}?backgroundColor=green&viewControls=on`}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Page>
  );
};

export default MiamiTransfersPage;
