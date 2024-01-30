import { gql } from '@apollo/client';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Box, IconButton, Pagination, Typography } from '@mui/material';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import type { Deal } from '@/__generated__/types.d';
import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';
import { initializeApollo } from '@/modules/core/use-apollo';
import { MapBox } from '@/modules/profile/components';
import { TransactionCard } from '@/modules/profile/components/Transactions/Card';
import { MapWrapper } from '@/modules/profile/components/Transactions/styles';
import theme from '@/theme';
import { getMapBoxDataForDeals } from '@/utils/data/dealsMapBox';

export const getServerSideProps: GetServerSideProps<{
  deals: Deal[];
}> = async (ctx) => {
  const { query } = ctx;
  const client = initializeApollo(ctx);

  const { data } = await client.query({
    query: gql`
      query Deals($limit: Int, $page: Int, $area: String, $sortBy: String) {
        deals(limit: $limit, page: $page, area: $area, sortBy: $sortBy) {
          totalDeals
          id
          slug
          feeds
          transactionType
          createdAt
          mainImage
          title
          salePrice
          feeds
          transactionType
          closingDate
          address
          assetType
          properties {
            latitude
            longitude
          }
        }
      }
    `,
    variables: {
      limit: 10,
      page: parseInt(query?.page as string, 10) || 1,
      area: 'Celebrity deals',
      sortBy: 'Price-High to Low',
    },
  });
  const deals = data?.deals;
  if (deals?.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      deals,
    },
  };
};

type CelebrityPageGetServerSideProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

const CelebrityPage: React.FC<CelebrityPageGetServerSideProps> = ({
  deals,
}) => {
  const [height, setHeight] = useState(0);
  const [page, setPage] = useState(1);
  const ref = useRef<any>(null);
  const router = useRouter();
  const [totalDeals, setTotalDeals] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setHeight(ref.current?.clientHeight);
    }, 2000);
    setTotalDeals(deals?.[0]?.totalDeals);
  }, [deals, ref.current?.clientHeight]);

  useEffect(() => {
    router.push({ pathname: 'celebrityDeals', query: { page } });
  }, [page]);

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <Page
      openGraph={{
        site_name: 'Traded',
        title: 'Celebrity Deals',
        locale: 'en_US',
        type: 'article',
      }}
      title="Celebrity Deals Archives | Traded"
      canonical={`${WEBSITE_URL}/celebrityDeals/`}
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
            Celebrity Deals
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
        display="flex"
        flexDirection="column"
        paddingX="2%"
        borderTop={`1px solid ${theme.palette.secondary.dark}`}
        sx={{ background: theme.palette.secondary.main }}
      >
        <Box
          display="flex"
          flexDirection={['column', 'column', 'row']}
          width="100%"
          gap="10px"
          paddingBottom="50px"
        >
          <Box
            display="flex"
            width="50%"
            sx={{ gap: '10px' }}
            flexDirection="column"
            ref={ref}
          >
            {deals?.map((deal, index) => (
              <TransactionCard key={index} deal={deal} loading={false} />
            ))}
            {deals?.length !== 0 && (
              <Box
                paddingTop="10px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                marginTop={3}
              >
                <IconButton
                  disabled={page === 1}
                  onClick={() => page >= 1 && setPage(page - 1)}
                >
                  <NavigateBefore />
                </IconButton>
                <Pagination
                  count={
                    totalDeals ? Math.ceil((totalDeals as number) / 4) : 50
                  }
                  hidePrevButton
                  hideNextButton
                  siblingCount={2}
                  page={page}
                  onChange={(_, p) => setPage(p)}
                />
                <IconButton
                  disabled={
                    page ===
                    (totalDeals ? Math.ceil((totalDeals as number) / 4) : 50)
                  }
                  onClick={() =>
                    page <= (Math.ceil(totalDeals as number) || 0) &&
                    setPage(page + 1)
                  }
                >
                  <NavigateNext />
                </IconButton>
              </Box>
            )}
          </Box>
          <MapWrapper height={`${height}px`}>
            <MapBox data={getMapBoxDataForDeals(deals)} />
          </MapWrapper>
        </Box>
      </Box>
    </Page>
  );
};

export default CelebrityPage;
