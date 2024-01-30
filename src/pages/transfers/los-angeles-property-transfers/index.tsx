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
        transfers(state: "Los Angeles") {
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

type LosAngelesTransfersStaticProps = InferGetStaticPropsType<
  typeof getStaticProps
>;

const LosAngelesTransfersPage: React.FC<LosAngelesTransfersStaticProps> = ({
  data,
}) => {
  return (
    <Page
      title="Los Angeles Property Transfers | Traded"
      canonical={`${WEBSITE_URL}/transfers/los-angeles-property-transfers/`}
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
            Los Angeles Property Transfers
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
            <strong>Property Transfers:</strong> Below is a list of all the
            property transfers in Los Angeles county in the past month.
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>Research:</strong> Our Research team digs thru govt property
            records to figure out who the buyer and seller is for each
            transaction.
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>Updated Monthly:</strong> We update this sheet monthly.
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

export default LosAngelesTransfersPage;
