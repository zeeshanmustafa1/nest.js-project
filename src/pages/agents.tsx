import { gql } from '@apollo/client';
import { Box, Pagination, Typography } from '@mui/material';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

import type {
  Broker,
  BrokersGetQuery,
  Deal,
  DealsGetQuery,
} from '@/__generated__/types.d';
import { DealsGetDocument } from '@/__generated__/types.d';
import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';
import { AgentCard, AgentsAside } from '@/modules/agents';
import { ClientOnly } from '@/modules/common/components';
import { initializeApollo } from '@/modules/core/use-apollo';
import { Newsletter } from '@/modules/homepage';

export const getServerSideProps: GetServerSideProps<{
  brokers: Broker[];
  deals?: Deal[] | undefined;
}> = async (ctx) => {
  const { res, query } = ctx;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=10'
  );

  const client = initializeApollo(ctx);

  const { data } = await client.query<BrokersGetQuery>({
    query: gql`
      query BrokersGet($page: Int, $limit: Int) {
        brokers(page: $page, limit: $limit) {
          nodes {
            id
            slug
            name
            title
            email
            phone
            thumbnail
            mainImage
            dealsCount
            totalSquareFootage
            company {
              id
              title
              slug
              createdAt
              updatedAt
            }
            lastDeal {
              closingDate
            }
          }
        }
      }
    `,
    variables: {
      limit: 10,
      page: parseInt(query?.page as string, 10) || 1,
    },
  });

  const dealsQuery = await client.query<DealsGetQuery>({
    query: DealsGetDocument,
    variables: {
      limit: 3,
      page: 1,
    },
  });

  const brokers = data.brokers?.nodes as Broker[] | undefined | null;
  const deals = dealsQuery?.data?.deals || [];

  if (!data || !brokers) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      brokers,
      deals,
    },
  };
};

const AgentsPage: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ brokers, deals }) => {
  const router = useRouter();
  const {
    query: { page },
  } = router;

  return (
    <Page
      title="Agents | Traded"
      openGraph={{
        title: 'Agents Arvhive | Traded',
        site_name: 'Traded',
      }}
      canonical={`${WEBSITE_URL}/agents/`}
    >
      <Box sx={{ background: '#f8f8f8' }}>
        <Box maxWidth="90%" m="0 auto" pt="30px">
          <Typography mb={5} component="h1" variant="h3" fontWeight={500}>
            Agents
          </Typography>
          <Box display="flex" flexWrap="wrap" mx="-15px" px="15px">
            <Box
              width={['100%', '100%', '70%']}
              max-width={['100%', '100%', '70%']}
              flex={['0 0 100%', '0 0 100%', '0 0 70%']}
              marginBottom="30px"
            >
              {brokers?.map((broker, index) => (
                <AgentCard key={`${broker?.id}-${index}`} broker={broker} />
              ))}
              <Box
                display="flex"
                justifyContent="center"
                my={3}
                sx={{
                  '.MuiPagination-ul > li > .Mui-selected': {
                    background: '#005a87',
                    color: '#fff !important',
                  },
                  '.MuiPagination-ul > li > button': {
                    color: '#005a87',
                    background: '#fff',
                    fontWeight: 600,
                    height: '40px',
                    width: '40px',
                  },
                }}
              >
                <Pagination
                  count={10}
                  page={page ? parseInt(page as string, 10) : 1}
                  onChange={(_, p) =>
                    router.push({ pathname: 'agents', query: { page: p } })
                  }
                  showFirstButton
                  showLastButton
                  variant="outlined"
                  shape="rounded"
                />
              </Box>
            </Box>

            <Box
              overflow="visible"
              minHeight="1px"
              px={['0px', '0px', '15px']}
              width={['100%', '100%', '30%']}
              max-width={['100%', '100%', '30%']}
              flex={['0 0 100%', '0 0 100%', '0 0 30%']}
              position="relative"
            >
              <AgentsAside deals={deals} />
            </Box>
          </Box>
        </Box>
      </Box>
      <ClientOnly>
        <Newsletter />
      </ClientOnly>
    </Page>
  );
};

export default AgentsPage;
