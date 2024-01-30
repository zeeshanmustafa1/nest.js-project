import { gql } from '@apollo/client';
import { Box, Typography } from '@mui/material';
import type { GetStaticProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useState } from 'react';

import type { DealsQuery } from '@/__generated__/types.d';
import { CompaniesDocument, DealsDocument } from '@/__generated__/types.d';
import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';
import AgenciesRanking from '@/modules/common/components/AgenciesRanking';
import AgentsRanking from '@/modules/common/components/AgentsRanking';
import DealsRanking from '@/modules/common/components/DealsRanking';
import LendersRanking from '@/modules/common/components/LendersRanking';
import { initializeApollo } from '@/modules/core/use-apollo';
import theme from '@/theme';

import * as Nav from '../../modules/common/rankingsStyles/styles';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const client = initializeApollo(ctx);

  const dealsData = await client.query<DealsQuery>({
    query: DealsDocument,
    variables: {
      page: 1,
      limit: 100,
      sortBy: 'Price-High to Low',
    },
  });

  const { deals } = dealsData.data;

  const { data } = await client.query({
    query: gql`
      query BrokersGet($page: Int, $limit: Int, $sortBy: String) {
        brokers(page: $page, limit: $limit, sortBy: $sortBy) {
          nodes {
            slug
            name
            thumbnail
            dealsCount
            totalSquareFootage
            totalVolume
            totalSaleDeals
            totalLoanDeals
            totalLeaseDeals
            totalSquareFootage
            lastDeal {
              closingDate
            }
          }
        }
      }
    `,
    variables: {
      limit: 100,
      page: 1,
      sortBy: 'deals_count',
    },
  });
  const agents = data?.brokers?.nodes;

  const agenciesData = await client.query({
    query: CompaniesDocument,
    variables: {
      companyType: 'Agency',
      limit: 100,
      page: 1,
      sortBy: 'deals_count',
      agentsLimit: 0,
      agentsPage: 1,
    },
  });

  const agencies = agenciesData?.data?.companies?.nodes;

  const lendersData = await client.query({
    query: CompaniesDocument,
    variables: {
      companyType: 'Lender',
      limit: 100,
      page: 1,
      sortBy: 'deals_count',
      agentsLimit: 0,
      agentsPage: 1,
    },
  });

  const lenders = lendersData?.data?.companies?.nodes;

  return {
    props: {
      deals,
      agents,
      agencies,
      lenders,
    },
    revalidate: 30,
  };
};

type RankingsPageGetStaticProps = InferGetServerSidePropsType<
  typeof getStaticProps
>;

const RankingsPage: React.FC<RankingsPageGetStaticProps> = ({
  deals,
  agents,
  agencies,
  lenders,
}) => {
  const [index, setIndex] = useState(0);
  return (
    <Page
      title="Rankings | Traded"
      openGraph={{
        title: 'Rankings | Traded',
        site_name: 'Traded',
      }}
      canonical={`${WEBSITE_URL}/rankings/`}
    >
      <Box
        maxWidth={1215}
        mr="auto"
        ml="auto"
        display="flex"
        textAlign="center"
        padding="50px 0px 0px 0px"
      >
        <Box flex="0 0 25%">
          <Image
            src="/assets/Shapes/DotsActivity.png"
            width={100}
            height={150}
            alt="shape"
          />
        </Box>
        <Box flex="0 0 50%">
          <Typography
            variant="h1"
            component="h1"
            aria-label="Activity"
            mb={1}
            sx={{ borderColor: 'primary.main', borderRadius: '16px' }}
          >
            Rankings
          </Typography>
        </Box>
        <Box flex="0 0 25%">
          <Image
            src="/assets/Icon/Colored/ActivityBuilding.svg"
            width={150}
            height={150}
            alt="building"
          />
        </Box>
      </Box>
      <Box
        maxWidth="100%"
        sx={{ background: theme.palette.secondary.main }}
        borderTop="1px solid #D4D7E2"
        minHeight="200px"
        padding={['0px', '0px', '50px 50px']}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="100%" display="flex" flexDirection="column">
          <Box
            width="100%"
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            marginY="10px"
            borderBottom={`1px solid ${theme.palette.secondary.dark}`}
          >
            <Box display="flex">
              <Nav.ProfileMenuNavWrapper>
                <Nav.ProfileMenuSectionLink
                  isactive={index === 0}
                  onClick={() => setIndex(0)}
                >
                  <Typography variant="text" component="p">
                    Agencies
                  </Typography>
                </Nav.ProfileMenuSectionLink>
                <Nav.ProfileMenuSectionLink
                  isactive={index === 1}
                  onClick={() => setIndex(1)}
                >
                  <Typography variant="text" component="p">
                    Agents
                  </Typography>
                </Nav.ProfileMenuSectionLink>
                <Nav.ProfileMenuSectionLink
                  isactive={index === 2}
                  onClick={() => setIndex(2)}
                >
                  <Typography variant="text" component="p">
                    Deals
                  </Typography>
                </Nav.ProfileMenuSectionLink>
                <Nav.ProfileMenuSectionLink
                  isactive={index === 3}
                  onClick={() => setIndex(3)}
                >
                  <Typography variant="text" component="p">
                    Lenders
                  </Typography>
                </Nav.ProfileMenuSectionLink>
              </Nav.ProfileMenuNavWrapper>
            </Box>
          </Box>
          {index === 0 && <AgenciesRanking agencies={agencies} />}
          {index === 1 && <AgentsRanking brokers={agents} />}
          {index === 2 && <DealsRanking deals={deals} />}
          {index === 3 && <LendersRanking lenders={lenders} />}
        </Box>
      </Box>
    </Page>
  );
};

export default RankingsPage;
