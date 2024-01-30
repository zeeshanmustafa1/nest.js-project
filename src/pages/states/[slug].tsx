import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import {
  Autocomplete,
  Backdrop,
  Box,
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { ParsedUrlQuery } from 'querystring';
import { useEffect, useRef, useState } from 'react';

import type { Deal, DealsGetQuery, Maybe } from '@/__generated__/types.d';
import { DealsDocument } from '@/__generated__/types.d';
import { assetClassTypes, WEBSITE_URL } from '@/constants';
import stateSlugs from '@/constants/states';
import Page from '@/layouts/Page';
import { initializeApollo } from '@/modules/core/use-apollo';
import { Newsletter } from '@/modules/homepage';
import { MapBox } from '@/modules/profile/components';
import { TransactionCard } from '@/modules/profile/components/Transactions/Card';
import theme from '@/theme';
import { getMapBoxDataForDeals } from '@/utils/data/dealsMapBox';

import * as S from '../../modules/profile/components/Transactions/styles';

type StatePageGetStaticProps = InferGetStaticPropsType<typeof getStaticProps>;

const DealsPage: React.FC<StatePageGetStaticProps> = ({
  deals: initialDeals,
  state: initialState,
  stateOptions,
}) => {
  const router = useRouter();

  const [deals, setDeals] = useState<Maybe<Deal[]> | undefined>(initialDeals);
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const [assetType, setAssetType] = useState('');

  const [dealType, setDealType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [page, setPage] = useState(1);
  const [totalDeals, setTotalDeals] = useState(0);
  const [height, setHeight] = useState(0);

  const ref = useRef<any>(null);
  const isFirstRender = useRef<boolean>(true);

  async function fetchCall() {
    await fetch('/api/deals', {
      method: 'POST',
      body: JSON.stringify({
        page,
        limit: 4,
        sortBy: 'Date-New to Old',
        assetClass: assetType,
        state,
        type: dealType,
        priceRange,
        dateRange,
      }),
    })
      .then((res) => res.json())
      .then((res) => setDeals(res.data.deals))
      .then(() => setTotalDeals(deals?.[0]?.totalDeals))
      .then(() => setLoading(false));
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      if (
        initialDeals &&
        initialDeals[0] &&
        initialDeals[0].properties &&
        initialDeals[0].properties.length &&
        initialDeals[0].properties[0]?.state !== state
      ) {
        setState('New York');
        router.push(`/states/new-york`, undefined, { shallow: true });
      }

      return;
    }

    setLoading(true);
    fetchCall();
  }, [page, assetType, state, dealType, priceRange, dateRange]);

  useEffect(() => {
    setTimeout(() => {
      setHeight(ref.current?.clientHeight);
    }, 1000);
  }, [deals, ref.current?.clientHeight]);

  function titleCaseToSlug(title: string): string {
    return title?.trim()?.toLowerCase()?.replace(/\s+/g, '-') ?? '';
  }

  function handleStateChange(newValue: string | null) {
    if (newValue === null || newValue === '') return;
    setState(newValue);
    router.push(`/states/${titleCaseToSlug(newValue)}`, undefined, {
      shallow: true,
    });
  }

  const url = `${WEBSITE_URL}/states/${titleCaseToSlug(state)}/`;

  return (
    <Page
      title="Deals Map | Traded"
      canonical={url}
      description={`Browse through all transactions that took place in ${state}`}
      openGraph={{
        title: 'Deals Archive | Traded',
        site_name: 'Traded',
      }}
    >
      <Backdrop sx={{ color: '#fff', zIndex: 1 }} open={loading}>
        <CircularProgress color="success" />
      </Backdrop>
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
            {state}
          </Typography>
          <Typography
            textAlign="center"
            fontSize={[16, 24, 24, 24]}
            lineHeight={['20px', '30px', '30px', '30px']}
            fontWeight={500}
            component="p"
            aria-label="Activity"
            mb={1}
          >
            View information about deals in any state across the nation.
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
      <Box sx={{ background: theme.palette.secondary.light }}>
        <Box maxWidth="100%" p="10px" m="0 auto">
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection={['column', 'row', 'row']}
            alignItems="center"
            paddingBottom="30px"
            marginX="50px"
            sx={{
              '.MuiSelect-select, .MuiInputBase-input': {
                fontSize: 22,
                fontWeight: 500,
                color: theme?.palette?.grey['500'],
              },
              borderBottom: '1px solid #D4D7E2',
            }}
          >
            <Box
              flex={['0 0 80%', '0 0 18%', '0 0 18%']}
              minWidth={['80%', '20%', '20%']}
              mt={5}
            >
              <Typography
                fontWeight={800}
                fontSize={12}
                lineHeight="12px"
                letterSpacing=".1em"
                textTransform="uppercase"
                color={theme?.palette?.grey['500']}
              >
                Asset Class
              </Typography>
              <FormControl
                variant="standard"
                fullWidth
                sx={{
                  '.MuiInputLabel-shrink': {
                    display: 'none',
                  },
                }}
              >
                <InputLabel
                  id="transaction-type-label"
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    lineHeight: 1,
                  }}
                >
                  All
                </InputLabel>
                <Select
                  labelId="asset-type-label"
                  value={assetType}
                  onChange={(e) => setAssetType(e.target.value as string)}
                  // label="Type"
                >
                  {assetClassTypes.map(({ type, label }) => (
                    <MenuItem key={type} value={label}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box
              flex={['0 0 80%', '0 0 18%', '0 0 18%']}
              minWidth={['80%', '18%', '18%']}
              mt={5}
            >
              <Typography
                fontWeight={800}
                fontSize={12}
                lineHeight="12px"
                letterSpacing=".1em"
                textTransform="uppercase"
                color={theme?.palette?.grey['500']}
              >
                State
              </Typography>
              <FormControl
                variant="standard"
                fullWidth
                sx={{
                  '.MuiInputLabel-shrink': {
                    display: 'none',
                  },
                }}
              >
                <Autocomplete
                  value={state}
                  onChange={(_, newValue) => handleStateChange(newValue ?? '')} // Provide a default value if newValue is null
                  options={stateOptions}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="State"
                      // margin="small"
                      variant="standard"
                    />
                  )}
                />
              </FormControl>
            </Box>
            {/*  */}

            <Box
              flex={['0 0 80%', '0 0 18%', '0 0 18%']}
              minWidth={['80%', '18%', '18%']}
              mt={5}
            >
              <Typography
                fontWeight={800}
                fontSize={12}
                lineHeight="12px"
                letterSpacing=".1em"
                textTransform="uppercase"
                color={theme?.palette?.grey['500']}
              >
                Type
              </Typography>
              <FormControl
                variant="standard"
                fullWidth
                sx={{
                  '.MuiInputLabel-shrink': {
                    display: 'none',
                  },
                }}
              >
                <InputLabel
                  id="transaction-type-label"
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    lineHeight: 1,
                  }}
                >
                  All Status
                </InputLabel>
                <Select
                  labelId="transaction-type-label"
                  value={dealType}
                  onChange={(e) => setDealType(e.target.value as string)}
                  label="Type"
                >
                  <MenuItem value="">All Status</MenuItem>
                  <MenuItem value="Leased">Leased</MenuItem>
                  <MenuItem value="Loan">Loan</MenuItem>
                  <MenuItem value="Sold">Sold</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box
              flex={['0 0 80%', '0 0 18%', '0 0 18%']}
              minWidth={['80%', '18%', '18%']}
              mt={5}
            >
              <Typography
                fontWeight={800}
                fontSize={12}
                lineHeight="12px"
                letterSpacing=".1em"
                textTransform="uppercase"
                color={theme?.palette?.grey['500']}
              >
                Price Range
              </Typography>
              <FormControl
                variant="standard"
                fullWidth
                sx={{
                  '.MuiInputLabel-shrink': {
                    display: 'none',
                  },
                }}
              >
                <InputLabel
                  id="transaction-type-label"
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    lineHeight: 1,
                  }}
                >
                  Select Price Range
                </InputLabel>
                <Select
                  labelId="price-range-label"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value as string)}
                  // label="Type"
                >
                  <MenuItem value="">Select Price Range</MenuItem>
                  <MenuItem value="$0-$1M">$0-$1M</MenuItem>
                  <MenuItem value="$1M-$5M">$1 - $5M</MenuItem>
                  <MenuItem value="$5M-$10M">$5M - $10M</MenuItem>
                  <MenuItem value="$10M-$50M">$10M - $50M</MenuItem>
                  <MenuItem value="$50M-$100M">$50M - $100M</MenuItem>
                  <MenuItem value="$100M+">$100M+</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box
              flex={['0 0 80%', '0 0 18%', '0 0 18%']}
              minWidth={['80%', '18%', '18%']}
              mt={5}
            >
              <Typography
                fontWeight={800}
                fontSize={12}
                lineHeight="12px"
                letterSpacing=".1em"
                textTransform="uppercase"
                color={theme?.palette?.grey['500']}
              >
                Date Range
              </Typography>
              <FormControl
                variant="standard"
                fullWidth
                sx={{
                  '.MuiInputLabel-shrink': {
                    display: 'none',
                  },
                }}
              >
                <InputLabel
                  id="transaction-type-label"
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    lineHeight: 1,
                  }}
                >
                  Select Date Range
                </InputLabel>
                <Select
                  labelId="date-range-label"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value as string)}
                  // label="Type"
                >
                  <MenuItem value="">Select Date Range</MenuItem>
                  <MenuItem value="3 Months">3 Months</MenuItem>
                  <MenuItem value="6 Months">6 Months</MenuItem>
                  <MenuItem value="1 Year">1 Year</MenuItem>
                  <MenuItem value="2 Years">2 Years</MenuItem>
                  <MenuItem value="">All Time</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={['column', 'column', 'row']}
            marginY="50px"
            justifyContent="center"
          >
            <Box
              width={['100%', '100%', '50%']}
              marginX="20px"
              paddingRight={['20px', '20px', '0px']}
              ref={ref}
            >
              <Box
                display="flex"
                flexDirection="column"
                gap="20px"
                width="100%"
              >
                {deals?.map((deal) => (
                  <TransactionCard
                    key={deal.slug}
                    deal={deal}
                    loading={false}
                  />
                ))}
              </Box>

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
            {deals?.length !== 0 && (
              <S.MapWrapper height={`${height}px`}>
                <MapBox data={getMapBoxDataForDeals(deals as Deal[])} />
              </S.MapWrapper>
            )}
          </Box>
        </Box>
      </Box>
      <Newsletter />
    </Page>
  );
};

interface StaticPropsResponse {
  deals: Deal[] | null | undefined;
  state: string;
  stateOptions: string[];
}

interface StaticPropsParams extends ParsedUrlQuery {
  slug: string;
}

type StatePageStaticProps = GetStaticProps<
  StaticPropsResponse,
  StaticPropsParams
>;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = [];

  stateSlugs.map((state: string) => {
    paths.push(`/states/${state}`);
    return null;
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: StatePageStaticProps = async (ctx) => {
  const { params } = ctx;
  const client = initializeApollo(ctx);

  function slugToTitleCase(slug: string): string {
    return slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  const stateOptions = stateSlugs.map((state: string) =>
    slugToTitleCase(state as string)
  );

  const slug = params?.slug;
  const state = slugToTitleCase(slug as string);

  const query = await client.query<DealsGetQuery>({
    query: DealsDocument,
    variables: {
      page: 1,
      limit: 4,
      sortBy: 'Date-New to Old',
      state,
    },
  });

  const data = query?.data;
  if (!data) {
    return {
      notFound: true,
    };
  }

  const { deals } = data;
  return {
    props: {
      deals,
      state,
      stateOptions,
    },
    revalidate: 60,
  };
};

export default DealsPage;
