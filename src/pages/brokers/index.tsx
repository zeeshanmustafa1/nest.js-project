import { gql } from '@apollo/client';
import {
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { setTimeout } from 'timers';

import type { Broker } from '@/__generated__/types.d';
import { assetClassTypes, coveredLocations, WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';
import { RenderIf } from '@/modules/common/components';
import { initializeApollo } from '@/modules/core/use-apollo';
import { Newsletter } from '@/modules/homepage';
import { ImageSection } from '@/modules/profile/components/Agents/ImageSection';
import { InfoSection } from '@/modules/profile/components/Agents/InfoSection';
import { SocialSection } from '@/modules/profile/components/Agents/SocialSection';
import theme from '@/theme';

export const getServerSideProps: GetServerSideProps<{
  brokers: Broker[];
  agentsCount: number;
}> = async (ctx) => {
  const { res, query } = ctx;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=10'
  );

  const client = initializeApollo(ctx);

  const { data } = await client.query({
    query: gql`
      query BrokersGet(
        $page: Int
        $limit: Int
        $sortBy: String
        $search: String
        $assetClass: String
        $area: String
        $type: String
      ) {
        brokers(
          page: $page
          limit: $limit
          sortBy: $sortBy
          search: $search
          assetClass: $assetClass
          area: $area
          type: $type
        ) {
          totalCount
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
            instagramHandle
            facebookHandle
            vimeoHandle
            youtubeHandle
            linkedinHandle
            websiteUrl
            googleplusHandle
            pinterestHandle
            twitterHandle
            totalVolume
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
            leaderBoardTags
          }
        }
      }
    `,
    variables: {
      limit: query?.limit,
      page: parseInt(query?.page as string, 10) || 1,
      sortBy: 'Volume',
      search: query?.searchText,
      assetClass: query?.assetClass,
      area: query?.area,
      type: query?.type,
    },
  });
  const agentsCount = data.brokers?.totalCount;
  const brokers = data.brokers?.nodes as Broker[] | undefined | null;
  if (!data || !brokers) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      brokers,
      agentsCount,
    },
  };
};

const BrokersPage: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ brokers, agentsCount }) => {
  const router = useRouter();
  const [brokerList, setBrokerList] = useState(brokers);
  const [loading, setLoading] = useState(false);
  const [assetType, setAssetType] = useState('');
  const [area, setArea] = useState<string>('');
  const [dealType, setDealType] = useState<string>('');
  const {
    query: { page },
  } = router;
  const onChangeSearchText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLoading(true);
    setTimeout(() => {
      router.replace(
        {
          pathname: 'brokers',
          query: { searchText: e.target.value as string },
        },
        '/brokers/'
      );
    }, 1000);
  };
  useEffect(() => {
    setBrokerList(brokers);
  }, [brokers]);
  useEffect(() => {
    setLoading(false);
  }, [brokerList]);
  useEffect(() => {
    setLoading(true);
    router.replace(
      {
        pathname: 'brokers',
        query: {
          assetClass: assetType === 'All' ? null : assetType,
          page,
          area: area === 'National' ? null : area,
          type: dealType === 'All Status' ? null : dealType,
        },
      },
      '/brokers/'
    );
  }, [assetType, area, dealType]);
  return (
    <Page
      title="Brokers | Traded"
      canonical={`${WEBSITE_URL}/brokers/`}
      openGraph={{
        title: 'Agents Arvhive | Traded',
        site_name: 'Traded',
      }}
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
          <Typography variant="h1" component="h1" aria-label="Activity" mb={1}>
            Agents
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
            Find the most active people in real estate.
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

      <Box sx={{ bgcolor: theme?.palette?.secondary?.light }}>
        <Box maxWidth={1215} p="10px" m="0 auto">
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection={['column', 'row', 'row']}
            alignItems="center"
            sx={{
              '.MuiSelect-select, .MuiInputBase-input': {
                fontSize: 22,
                fontWeight: 500,
                color: theme?.palette?.grey['500'],
              },
            }}
          >
            <Box
              flex={['0 0 80%', '0 0 30%', '0 0 30%']}
              minWidth={['80%', '30%', '30%']}
              mt={5}
              sx={{
                '& input::placeholder': {
                  fontSize: '22px',
                  fontWeight: 500,
                },
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: `#005a87 !important`,
                },
              }}
            >
              <Typography
                fontWeight={800}
                fontSize={12}
                lineHeight="12px"
                letterSpacing=".1em"
                textTransform="uppercase"
                color={theme?.palette?.grey['500']}
                mb={3}
              >
                Search
              </Typography>
              <TextField
                size="medium"
                variant="standard"
                placeholder="Search"
                fullWidth
                onChange={onChangeSearchText}
                InputProps={{
                  type: 'search',
                  endAdornment: (
                    <Image
                      alt="Search icon. Click to search for agents, agencies or lenders"
                      src="/assets/Search.svg"
                      width={24}
                      height={24}
                      loading="lazy"
                    />
                  ),
                }}
              />
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
                    fontSize: 22,
                    fontWeight: 500,
                    lineHeight: 1,
                  }}
                >
                  All
                </InputLabel>
                <Select
                  labelId="transaction-type-label"
                  // value={filterValues.type}
                  onChange={(e) => setAssetType(e.target.value as string)}
                  name="type"
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
                    fontSize: 22,
                    fontWeight: 500,
                    lineHeight: 1,
                  }}
                >
                  {coveredLocations[0]?.state}
                </InputLabel>
                <Select
                  labelId="transaction-type-label"
                  // value={filterValues.type}
                  onChange={(e) => setArea(e.target.value as string)}
                  name="type"
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
                    fontSize: 22,
                    fontWeight: 500,
                    lineHeight: 1,
                  }}
                >
                  All Status
                </InputLabel>
                <Select
                  labelId="transaction-type-label"
                  // value={filterValues.type}
                  onChange={(e) => setDealType(e.target.value as string)}
                  name="type"
                  // label="Type"
                >
                  <MenuItem value="Leased">Leased</MenuItem>
                  <MenuItem value="Loan">Loan</MenuItem>
                  <MenuItem value="Sold">Sold</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box mt={8}>
            {loading ? (
              <CircularProgress size={50} />
            ) : (
              brokerList?.map((broker, index) => (
                <RenderIf
                  condition={!!broker}
                  key={`${broker?.id}-${broker?.name}-${index + 1}`}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    border="1px solid #d5d7e2"
                    borderRadius="8px"
                    margin="20px 0"
                  >
                    {/* Image Section */}
                    <ImageSection
                      broker={broker as Broker}
                      sx={{
                        flex: [
                          '0 0 40%',
                          '0 0 25%',
                          '0 0 25%',
                          '0 0 25%',
                          '0 0 25%',
                        ],
                        background: theme?.palette?.secondary?.dark,
                        position: 'relative',
                        height: '200px',
                      }}
                    />

                    {/* Info Section */}
                    <InfoSection
                      broker={broker as Broker}
                      sx={{
                        flex: [
                          '0 0 60%',
                          '0 0 45%',
                          '0 0 45%',
                          '0 0 45%',
                          '0 0 45%',
                        ],
                        maxWidth: ['60%', '45%', '45%', '45%', '45%'],
                        paddingX: '20px',
                        paddingTop: [1, '30px', '30px', '30px', '30px'],
                      }}
                    />

                    {/* Agents Socials and link */}
                    <SocialSection
                      broker={broker as Broker}
                      sx={{
                        flex: '0 0 30%',
                        maxWidth: '30%',
                        paddingTop: '30px',
                        paddingLeft: '20px',
                        borderLeft: '1px solid #F0F0F0',
                        position: 'relative',
                        display: ['none', 'block', 'block', 'block', 'block'],
                      }}
                    />
                  </Box>
                </RenderIf>
              ))
            )}
          </Box>
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
                height: ['30px', '40px', '40px'],
                width: ['30px', '40px', '40px'],
              },
            }}
          >
            <Pagination
              count={Math.ceil(agentsCount / 10)}
              page={page ? parseInt(page as string, 10) : 1}
              onChange={(_, p) =>
                router.push(
                  { pathname: 'brokers', query: { page: p } },
                  '/brokers/'
                )
              }
              // showFirstButton
              // showLastButton
              variant="outlined"
              shape="rounded"
            />
          </Box>
        </Box>
      </Box>
      <Newsletter />
    </Page>
  );
};

export default BrokersPage;
