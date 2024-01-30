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

import * as Nav from '../../modules/common/rankingsStyles/styles';

export const getServerSideProps: GetServerSideProps<{
  deals: Deal[];
  title: string;
}> = async (ctx) => {
  const { params, query } = ctx;
  const client = initializeApollo(ctx);

  const title: string = params?.slug as string;

  const { data } = await client.query({
    query: gql`
      query Deals($type: String, $limit: Int, $page: Int, $area: String) {
        deals(
          type: $type
          limit: $limit
          page: $page
          sortBy: "Date-New to Old"
          area: $area
        ) {
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
      type: title
        ?.toLowerCase()
        .split('-')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      limit: 10,
      page: parseInt(query?.page as string, 10) || 1,
      area: query?.area,
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
      title,
    },
  };
};

type StatusPageGetServerSideProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

const StatusPage: React.FC<StatusPageGetServerSideProps> = ({
  deals,
  title,
}) => {
  const [height, setHeight] = useState(0);
  const [page, setPage] = useState(1);
  const ref = useRef<any>(null);
  const router = useRouter();
  const [totalDeals, setTotalDeals] = useState(10);
  const [ind, setIndex] = useState(0);
  const [area, setArea] = useState<string>('');

  useEffect(() => {
    setTimeout(() => {
      setHeight(ref.current?.clientHeight);
    }, 2000);
    setTotalDeals(deals?.[0]?.totalDeals);
  }, [deals, ref.current?.clientHeight]);

  useEffect(() => {
    router.push({ pathname: title, query: { page, area } }, title);
  }, [page, area]);

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const pageTitle = `${title
    ?.toLowerCase()
    .split('-')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')} Archives | Traded`;

  const url = `${WEBSITE_URL}/status/${title}/`;

  return (
    <Page
      openGraph={{
        site_name: 'Traded',
        title,
        locale: 'en_US',
        type: 'article',
      }}
      title={pageTitle}
      canonical={url}
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
            {title
              ?.toLowerCase()
              .split('-')
              .map(
                (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
              )
              .join(' ')}
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
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          marginY="10px"
        >
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            overflow="scroll"
          >
            <Nav.ProfileMenuNavWrapper>
              <Nav.ProfileMenuSectionLink
                isactive={ind === 0}
                onClick={() => {
                  setIndex(0);
                  setArea('');
                }}
              >
                <Typography variant="text" component="p">
                  All
                </Typography>
              </Nav.ProfileMenuSectionLink>
              <Nav.ProfileMenuSectionLink
                isactive={ind === 1}
                onClick={() => {
                  setIndex(1);
                  setArea('New York');
                }}
              >
                <Typography variant="text" component="p">
                  NY
                </Typography>
              </Nav.ProfileMenuSectionLink>
              <Nav.ProfileMenuSectionLink
                isactive={ind === 2}
                onClick={() => {
                  setIndex(2);
                  setArea('Los Angeles');
                }}
              >
                <Typography variant="text" component="p">
                  LA
                </Typography>
              </Nav.ProfileMenuSectionLink>
              <Nav.ProfileMenuSectionLink
                isactive={ind === 3}
                onClick={() => {
                  setIndex(3);
                  setArea('Miami');
                }}
              >
                <Typography variant="text" component="p">
                  MIA
                </Typography>
              </Nav.ProfileMenuSectionLink>
              <Nav.ProfileMenuSectionLink
                isactive={ind === 4}
                onClick={() => {
                  setIndex(4);
                  setArea('Boston');
                }}
              >
                <Typography variant="text" component="p">
                  BOS
                </Typography>
              </Nav.ProfileMenuSectionLink>
              <Nav.ProfileMenuSectionLink
                isactive={ind === 5}
                onClick={() => {
                  setIndex(5);
                  setArea('Chicago');
                }}
              >
                <Typography variant="text" component="p">
                  CHI
                </Typography>
              </Nav.ProfileMenuSectionLink>
              <Nav.ProfileMenuSectionLink
                isactive={ind === 6}
                onClick={() => {
                  setIndex(6);
                  setArea('New Jersey');
                }}
              >
                <Typography variant="text" component="p">
                  NJ
                </Typography>
              </Nav.ProfileMenuSectionLink>
              <Nav.ProfileMenuSectionLink
                isactive={ind === 7}
                onClick={() => {
                  setIndex(7);
                  setArea('Texas');
                }}
              >
                <Typography variant="text" component="p">
                  TX
                </Typography>
              </Nav.ProfileMenuSectionLink>
            </Nav.ProfileMenuNavWrapper>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={['column', 'column', 'row']}
          width="100%"
          gap="10px"
          paddingBottom="50px"
        >
          <Box
            display="flex"
            width={['100%', '100%', '50%']}
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

export default StatusPage;
