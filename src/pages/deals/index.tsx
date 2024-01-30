import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import {
  Backdrop,
  Box,
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import type { Deal, Maybe } from '@/__generated__/types.d';
import { assetClassTypes, coveredLocations, WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';
import { Newsletter } from '@/modules/homepage';
import { MapBox } from '@/modules/profile/components';
import { TransactionCard } from '@/modules/profile/components/Transactions/Card';
import theme from '@/theme';
import { getMapBoxDataForDeals } from '@/utils/data/dealsMapBox';

import * as S from '../../modules/profile/components/Transactions/styles';

const DealsPage = () => {
  const [deals, setDeals] = useState<Maybe<Deal[]> | undefined>();
  const [loading, setLoading] = useState(false);

  const [assetType, setAssetType] = useState('');
  const [area, setArea] = useState('');
  const [dealType, setDealType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [page, setPage] = useState(1);
  const [totalDeals, setTotalDeals] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef<any>(null);

  async function fetchCall() {
    await fetch('/api/deals', {
      method: 'POST',
      body: JSON.stringify({
        page,
        limit: 4,
        sortBy: 'Date-New to Old',
        assetClass: assetType,
        area: area === 'National' ? null : area,
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
    setLoading(true);
    fetchCall();
  }, [page, assetType, area, dealType, priceRange, dateRange]);

  useEffect(() => {
    setTimeout(() => {
      setHeight(ref.current?.clientHeight);
    }, 1000);
  }, [deals, ref.current?.clientHeight]);

  return (
    <Page
      title="Deals Map | Traded"
      openGraph={{
        title: 'Deals Archive | Traded',
        site_name: 'Traded',
      }}
      canonical={`${WEBSITE_URL}/deals/`}
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
            Deals
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
            View information about the deals across the nation.
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
                Area
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
                  {coveredLocations[0]?.state}
                </InputLabel>
                <Select
                  labelId="location-type-label"
                  value={area}
                  onChange={(e) => setArea(e.target.value as string)}
                  // label="Type"
                >
                  {coveredLocations.map(({ type, state }) => (
                    <MenuItem key={type} value={state}>
                      {state}
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
                Transaction Type
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

export default DealsPage;
