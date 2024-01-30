import { gql } from '@apollo/client';
import { Box, Typography } from '@mui/material';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useState } from 'react';

import type {
  CompaniesGetQuery,
  CompanyMarketResolverQuery,
  LeaderBoardGetQuery,
  RecentDealGetQuery,
} from '@/__generated__/types.d';
import {
  CompanyMarketResolverDocument,
  LeaderBoardGetDocument,
  RecentDealGetDocument,
} from '@/__generated__/types.d';
import Page from '@/layouts/Page';
import { ClientOnly } from '@/modules/common/components';
import { ProfileMenuSectionLink } from '@/modules/common/rankingsStyles/styles';
import { initializeApollo } from '@/modules/core/use-apollo';
import {
  AgencySlider,
  BrokerRows,
  CompanyMarketShare,
  LeaderBoardSlider,
  Newsletter,
  RecentActivity,
  SearchTransactions,
  StartSearching,
} from '@/modules/homepage';
import {
  getLeaderBoardSlidesData,
  getMiniLeaderBoardData,
} from '@/utils/data/leaderboard';
import { getRecentActivity } from '@/utils/data/recentActivity';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const client = initializeApollo(ctx);

  const getCompanyMarketResolver = async (
    companyType: 'agency' | 'lender',
    sortBy:
      | 'most_agents'
      | 'most_financed'
      | 'most_sold'
      | 'most_leases_closed'
      | 'largest_volume'
      | 'most_deals_closed'
      | 'most_square_feet'
      | 'most_relationships'
  ) => {
    const {
      data: { companyMarket },
    } = await client.query<CompanyMarketResolverQuery>({
      query: CompanyMarketResolverDocument,
      variables: {
        companyType,
        sortBy,
      },
    });

    return companyMarket;
  };

  // Call query to get broker rows for leaderboard
  const {
    data: { leaderBoardResolver },
  } = await client.query<LeaderBoardGetQuery>({
    query: LeaderBoardGetDocument,
  });

  const {
    data: { recentDeal },
  } = await client.query<RecentDealGetQuery>({
    query: RecentDealGetDocument,
    variables: {
      limit: 5,
    },
  });

  const {
    data: { companies },
  } = await client.query<CompaniesGetQuery>({
    query: gql`
      query CompaniesGet(
        $page: Int
        $limit: Int
        $companyType: String!
        $sortBy: String
      ) {
        companies(
          page: $page
          limit: $limit
          companyType: $companyType
          sortBy: $sortBy
        ) {
          nodes {
            id
            slug
            title
            mainImage
          }
        }
      }
    `,
    variables: {
      limit: 20,
      page: 0,
      companyType: 'agency',
      sortBy: 'deals_count',
    },
  });

  const agencyMarketShares = [
    await getCompanyMarketResolver('agency', 'most_agents'),
    await getCompanyMarketResolver('agency', 'most_financed'),
    await getCompanyMarketResolver('agency', 'most_sold'),
    await getCompanyMarketResolver('agency', 'most_leases_closed'),
  ];

  const lenderMarketShares = [
    await getCompanyMarketResolver('lender', 'largest_volume'),
    await getCompanyMarketResolver('lender', 'most_deals_closed'),
    await getCompanyMarketResolver('lender', 'most_square_feet'),
    await getCompanyMarketResolver('lender', 'most_relationships'),
  ];

  // Generate data object using API data
  const brokerRows = getMiniLeaderBoardData(leaderBoardResolver);
  const leaderBoardSlides = getLeaderBoardSlidesData(leaderBoardResolver);
  const recentActivity = getRecentActivity(recentDeal);

  return {
    props: {
      brokerRows,
      leaderBoardSlides,
      partnerAgencies: companies.nodes || [],
      recentActivity,
      agencyMarketShares,
      lenderMarketShares,
    },
    revalidate: 30,
  };
};

type HomepageGetStaticProps = InferGetStaticPropsType<typeof getStaticProps>;

const TradedHomepage: React.FC<HomepageGetStaticProps> = ({
  brokerRows,
  leaderBoardSlides,
  recentActivity,
  partnerAgencies,
  agencyMarketShares,
  lenderMarketShares,
}) => {
  const [index, setIndex] = useState(0);

  return (
    <Page
      openGraph={{
        title: 'Home',
        site_name: 'Traded',
        images: [
          {
            url: 'https://traded.co/wp-content/uploads/2021/09/traded-logo-gif-cmp.gif',
            width: 800,
            height: 283,
            type: 'image/gif',
          },
        ],
      }}
      additionalMetaTags={[
        {
          property: 'article:publisher',
          content: 'https://www.facebook.com/tradedny/',
        },
        // {
        //   property: 'article:modified_time',
        //   content: updatedAt,
        // },
      ]}
    >
      <SearchTransactions />
      <BrokerRows brokerRows={brokerRows} />
      <AgencySlider partnerAgencies={partnerAgencies} />
      <RecentActivity recentActivity={recentActivity} />
      <LeaderBoardSlider leaderBoardSlides={leaderBoardSlides} page={false} />
      <ClientOnly>
        <StartSearching />
      </ClientOnly>
      {/* market share component */}
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        justifyContent="center"
        alignItems="center"
        marginTop="20px"
        gap="10px"
      >
        <ProfileMenuSectionLink
          isactive={index === 0}
          onClick={() => {
            setIndex(0);
          }}
        >
          <Typography variant="text" component="p">
            Agencies
          </Typography>
        </ProfileMenuSectionLink>
        <ProfileMenuSectionLink
          isactive={index === 1}
          onClick={() => {
            setIndex(1);
          }}
        >
          <Typography variant="text" component="p">
            Lenders
          </Typography>
        </ProfileMenuSectionLink>
      </Box>
      {index === 0 && (
        <CompanyMarketShare
          title="Agency Market Share"
          subtitle="Traded tracks agency activity across the nation."
          ctaLink="/agencies"
          ctaText="Search for Agencies"
          tabsContent={agencyMarketShares}
        />
      )}
      {index === 1 && (
        <CompanyMarketShare
          title="Lender Market Share"
          subtitle="Traded tracks lender activity across the nation."
          ctaLink="/lenders"
          ctaText="Search for Lenders"
          tabsContent={lenderMarketShares}
          isLender
        />
      )}

      <ClientOnly>
        <Newsletter />
      </ClientOnly>
    </Page>
  );
};

export default TradedHomepage;
