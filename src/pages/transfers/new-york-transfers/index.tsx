import { gql } from '@apollo/client';
import { Box, ListItem, Typography } from '@mui/material';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';
import { RenderIf } from '@/modules/common/components';
import { initializeApollo } from '@/modules/core/use-apollo';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const client = initializeApollo(ctx);

  const { data } = await client.query({
    query: gql`
      query Transfers {
        transfers(state: "New york") {
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

type NewYorkTransfersStaticProps = InferGetStaticPropsType<
  typeof getStaticProps
>;

const NewYorkTransfersPage: React.FC<NewYorkTransfersStaticProps> = ({
  data,
}) => {
  return (
    <Page
      title="New York Transfers | Traded"
      canonical={`${WEBSITE_URL}/transfers/new-york-transfers/`}
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
            New York Transfers
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
            <strong>Daily Transfers:</strong> Below is a list of daily transfers
            sourced from NYC’s Acris, updated <strong>live.</strong>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>Research:</strong> Traded’s research team unveils all the
            entities involved in every transaction to show who is buyer &
            seller.
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <strong>Condo/Co-Op Note:</strong>{' '}
            <em>
              If an address has a red line on the left side its a condo or
              co-op.
            </em>
          </ListItem>
          {data?.transfers?.edges?.map((transfer: any, index: number) => (
            // Temporarily disable the other two airtables. To show all tables simply remove the RenderIf condition
            <RenderIf
              key={index}
              condition={
                transfer?.node?.title === 'Commercial Transactions over $3M'
              }
            >
              <Box>
                {/* <Typography>{transfer?.node?.title}</Typography> */}
                <Typography>Commercial Transactions over $1M</Typography>
                <iframe
                  width="100%"
                  height="600px"
                  style={{ border: '1px solid gray' }}
                  src={`${transfer?.node?.link}?backgroundColor=green&viewControls=on`}
                />
              </Box>
            </RenderIf>
          ))}
        </Box>
      </Box>
    </Page>
  );
};

export default NewYorkTransfersPage;
