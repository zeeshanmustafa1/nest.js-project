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
import { useEffect, useState } from 'react';

import { coveredLocations, WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';
import { Newsletter } from '@/modules/homepage';
import { LenderCard } from '@/modules/profile/components/LenderCard';
import theme from '@/theme';

import brokers from '../brokers';

const LendersPage = () => {
  const [area, setArea] = useState<string>('');
  const [loanAmount, setLoanAmount] = useState<string>('');

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [compCount, setCompCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const call = async () => {
    await fetch('/api/companiesGet', {
      method: 'POST',
      body: JSON.stringify({
        companyType: 'Lender',
        page: page as number,
        limit: 6,
        sortBy: 'Volume',
        area: area === 'National' ? '' : area,
        loanAmount: loanAmount === '' ? '' : loanAmount,
        agentsLimit: 7,
        agentsPage: 1,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data.companies.nodes);
        setCompCount(res.data.companies.totalCount);
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    call();
  }, [page, area, loanAmount]);

  return (
    <Page
      title="Lenders | Traded"
      openGraph={{
        title: 'Lenders Archive | Traded',
        site_name: 'Traded',
      }}
      canonical={`${WEBSITE_URL}/lender/`}
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
            Lenders
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
            Search for the lenders behind the deals.
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
        sx={{ bgcolor: theme?.palette?.secondary?.light }}
        borderTop="2px solid #D4D7E2"
        borderBottom="2px solid #D4D7E2"
      >
        <Box maxWidth={1215} p="10px" m="0 auto">
          <Box
            display="flex"
            justifyContent="flex-start"
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
              minWidth={['80%', '18%', '18%']}
              mt={5}
              marginRight="20px"
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
              marginRight="20px"
            >
              <Typography
                fontWeight={800}
                fontSize={12}
                lineHeight="12px"
                letterSpacing=".1em"
                textTransform="uppercase"
                color={theme?.palette?.grey['500']}
              >
                Loan Amount
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
                  id="loan-amount-label"
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    lineHeight: 1,
                  }}
                >
                  Select
                </InputLabel>
                <Select
                  labelId="loan-label"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value as string)}
                  // label="Type"
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="$0-$5M">$0-$5M</MenuItem>
                  <MenuItem value="$5M-$10M">$5M-$10M</MenuItem>
                  <MenuItem value="$10M-$50M">$10M-$50M</MenuItem>
                  <MenuItem value="$50M-$200M">$50M-$200M</MenuItem>
                  <MenuItem value="$200M-$1T">$200M-$1T</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center">
            {data.map((comp) => (
              <LenderCard key={comp} company={comp} />
            ))}
          </Box>

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
              count={brokers?.length ? Math.ceil((compCount as number) / 5) : 0}
              hidePrevButton
              hideNextButton
              siblingCount={2}
              page={page}
              onChange={(_, p) => setPage(p)}
            />
            <IconButton
              disabled={
                page ===
                (brokers?.length ? Math.ceil((compCount as number) / 5) : 0)
              }
              onClick={() =>
                page <= (Math.ceil(compCount as number) || 0) &&
                setPage(page + 1)
              }
            >
              <NavigateNext />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Newsletter />
    </Page>
  );
};

export default LendersPage;
