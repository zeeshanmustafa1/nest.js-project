import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import type { Company } from '@/__generated__/types.d';
import theme from '@/theme';
import { formatAmount } from '@/utils/helpers';
import { getUrlForPage } from '@/utils/urlMapper';

import type { Tabs } from './types';

interface CompanyMarketShareProps {
  title: string;
  subtitle: string;
  ctaLink: string;
  ctaText: string;
  isLender?: boolean;
  tabsContent: [Company[]];
}

export const CompanyMarketShare: React.FC<CompanyMarketShareProps> = ({
  title,
  subtitle,
  ctaLink,
  ctaText,
  isLender = false,
  tabsContent = [],
}) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const Title = () => (
    <Typography variant="h2" component="h2" textAlign="center" mb={2}>
      {title}
    </Typography>
  );

  const Subtitle = () => (
    <Typography component="p" variant="bodyLarge" textAlign="center" mb={3}>
      {subtitle}
    </Typography>
  );

  const Cta = () => (
    <Box textAlign="center" mb={3}>
      <Link href={ctaLink} passHref>
        <Box
          component="a"
          sx={{
            textDecoration: 'none',
            width: 'auto',
            color: '#000',
            display: 'inline-block',
          }}
        >
          <Typography fontSize={20} fontWeight={600}>
            {ctaText}
          </Typography>
        </Box>
      </Link>
    </Box>
  );

  const MarketShareBoard = () => {
    const TabsSection = () => {
      const tabs: Tabs[] = isLender
        ? [
            'Largest Volume',
            'Most Deals Closed',
            'Most Square Feet',
            'Most Relationships',
          ]
        : ['Most Agents', 'Most Financed', 'Most Sold', 'Most Leased Closed'];

      const Tab: React.FC<{ text: string; isActive: boolean }> = ({
        text,
        isActive,
      }) => {
        return (
          <Box
            display="inline-block"
            textAlign="center"
            fontSize={[12, 18, 18, 18]}
            borderRadius="3px"
            lineHeight={2}
            fontWeight={600}
            m="0 10px"
            p="10px 20px"
            sx={{
              cursor: 'pointer',
              background: isActive ? theme?.palette?.black?.main : '#f0f0f0',
            }}
          >
            <Typography
              fontWeight="inherit"
              fontSize="inherit"
              color={isActive ? '#fff' : '#000'}
            >
              {text}
            </Typography>
          </Box>
        );
      };

      return (
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          {tabs?.map((tab, index) => (
            <Box
              key={`${tab}-${index}`}
              onClick={() => setSelectedTab(index)}
              mb={1}
            >
              <Tab
                text={tab}
                isActive={`${tab}-${index}`.includes(`${selectedTab}`)}
              />
            </Box>
          ))}
        </Box>
      );
    };

    const TabsContent = () => {
      const ImageAndArrow: React.FC<{
        imageUrl: string;
        titleText: string;
        slug: string;
        smallImage?: boolean;
      }> = ({ imageUrl, titleText, smallImage, slug }) => (
        <Box display="flex" justifyContent="space-between" width="100%">
          <Link
            href={
              isLender
                ? getUrlForPage('lender', slug)
                : getUrlForPage('agency', slug)
            }
            passHref
          >
            <a>
              <Image
                src={imageUrl}
                alt={titleText}
                width={smallImage ? 30 : 70}
                height={smallImage ? 30 : 70}
              />
            </a>
          </Link>
          <Box height={30}>
            <Image
              src="/assets/Arrows/CornerArrow.svg"
              alt="external link arrow"
              width={30}
              height={30}
            />
          </Box>
        </Box>
      );

      const RankBoxStat: React.FC<{
        value: string;
        stat: string;
        small: boolean;
        smallImage: boolean;
      }> = ({ value, stat, small, smallImage }) => (
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography
            variant={small ? 'h3' : 'h2'}
            fontWeight={900}
            color={smallImage ? theme?.palette?.grey['500'] : 'white'}
            textAlign="center"
            width={smallImage ? '100%' : ''}
          >
            {value}
          </Typography>
          <Typography
            variant="bodyLarge"
            color={smallImage ? theme?.palette?.grey['500'] : 'white'}
          >
            {stat}
          </Typography>
        </Box>
      );

      const RankBox: React.FC<{
        imageUrl: string;
        titleText: string;
        slug: string;
        small?: boolean;
        smallImage?: boolean;
        color: string;
        stats?: { value: string; stat: string }[];
      }> = ({
        imageUrl,
        titleText,
        slug,
        small = false,
        stats = [],
        color,
        smallImage = false,
      }) => (
        <Box
          sx={{
            display: 'flex',
            background: color,
            alignItems: 'flex-start',
            padding: '10px',
            borderRadius: '4px',
            flexDirection: 'column',
          }}
        >
          <ImageAndArrow
            imageUrl={imageUrl || ''}
            titleText={titleText || ''}
            slug={slug}
            smallImage={smallImage}
          />
          <Box
            component="ul"
            marginTop="20px"
            marginBottom={smallImage ? '0px' : '20px'}
            display={smallImage ? 'flex' : 'block'}
            justifyContent={smallImage ? 'space-between' : 'unset'}
            width={smallImage ? '90%' : 'fit-content'}
            sx={{ listStyle: 'none', p: 0, mx: 0 }}
          >
            {stats.map((stat, index) => (
              <>
                {stat.value && stat.value !== '$0' && stat.value !== '0' && (
                  <Box key={(stat.value, index + 1)} component="li" mb="5px">
                    <RankBoxStat
                      value={stat?.value}
                      stat={stat.stat}
                      small={small}
                      smallImage={smallImage}
                    />
                  </Box>
                )}
              </>
            ))}
          </Box>
        </Box>
      );

      return (
        <Box width="100%" mt="30px">
          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            <Box
              flex={['0 0 100%', '0 0 30%', '0 0 30%', '0 0 30%']}
              maxWidth={['100%', '30%', '30%', '30%']}
              mb={2}
            >
              {tabsContent![selectedTab]?.length && (
                <RankBox
                  imageUrl={tabsContent[selectedTab]![0]?.mainImage || ''}
                  titleText={tabsContent[selectedTab]![0]?.title || ''}
                  slug={tabsContent[selectedTab]![0]?.slug || ''}
                  color="#7399c6"
                  stats={
                    isLender
                      ? [
                          {
                            value: tabsContent[selectedTab]![0]?.totalVolume
                              ? `$${formatAmount(
                                  tabsContent[selectedTab]![0]?.totalVolume
                                )}`
                              : '',
                            stat: 'Volume',
                          },
                          {
                            value: tabsContent[selectedTab]![0]?.dealsCount
                              ? `${tabsContent[selectedTab]![0]?.dealsCount}`
                              : '',
                            stat: 'Deals Closed',
                          },
                          {
                            value: tabsContent[selectedTab]![0]
                              ?.totalSquareFootage
                              ? `${formatAmount(
                                  tabsContent[selectedTab]![0]
                                    ?.totalSquareFootage
                                )}`
                              : '',
                            stat: 'Square Feet',
                          },
                        ]
                      : [
                          selectedTab !== 3
                            ? {
                                value: tabsContent[selectedTab]![0]?.totalVolume
                                  ? `$${formatAmount(
                                      tabsContent[selectedTab]![0]?.totalVolume
                                    )}`
                                  : '',
                                stat: 'Volume',
                              }
                            : {
                                value: '',
                                stat: '',
                              },
                          {
                            value: tabsContent[selectedTab]![0]?.dealsCount
                              ? `${tabsContent[selectedTab]![0]?.dealsCount}`
                              : '',
                            stat: `${
                              selectedTab === 3
                                ? 'Leases Closed'
                                : 'Deals Closed'
                            }`,
                          },
                          {
                            value: tabsContent[selectedTab]![0]?.profilesCount
                              ? `${tabsContent[selectedTab]![0]?.profilesCount}`
                              : '',
                            stat: 'Agents',
                          },
                        ]
                  }
                />
              )}
            </Box>

            <Box
              flex={['0 0 100%', '0 0 30%', '0 0 30%', '0 0 30%']}
              maxWidth={['100%', '30%', '30%', '30%']}
              mb={2}
            >
              <Box mb={2}>
                {tabsContent![selectedTab]?.length && (
                  <RankBox
                    imageUrl={tabsContent[selectedTab]![1]?.mainImage || ''}
                    titleText={tabsContent[selectedTab]![1]?.title || ''}
                    slug={tabsContent[selectedTab]![1]?.slug || ''}
                    color="red"
                    small
                    stats={
                      isLender
                        ? [
                            {
                              value: tabsContent[selectedTab]![1]?.totalVolume
                                ? `$${formatAmount(
                                    tabsContent[selectedTab]![1]?.totalVolume
                                  )}`
                                : '',
                              stat: 'Volume',
                            },
                            {
                              value: tabsContent[selectedTab]![1]?.dealsCount
                                ? `${tabsContent[selectedTab]![1]?.dealsCount}`
                                : '',
                              stat: 'Deals Closed',
                            },
                            {
                              value: tabsContent[selectedTab]![1]
                                ?.totalSquareFootage
                                ? `${formatAmount(
                                    tabsContent[selectedTab]![1]
                                      ?.totalSquareFootage
                                  )}`
                                : '',
                              stat: 'Square Feet',
                            },
                          ]
                        : [
                            selectedTab !== 3
                              ? {
                                  value: tabsContent[selectedTab]![1]
                                    ?.totalVolume
                                    ? `$${formatAmount(
                                        tabsContent[selectedTab]![1]
                                          ?.totalVolume
                                      )}`
                                    : '',
                                  stat: 'Volume',
                                }
                              : {
                                  value: '',
                                  stat: '',
                                },
                            {
                              value: tabsContent[selectedTab]![1]?.dealsCount
                                ? `${tabsContent[selectedTab]![1]?.dealsCount}`
                                : '',
                              stat: `${
                                selectedTab === 3
                                  ? 'Leases Closed'
                                  : 'Deals Closed'
                              }`,
                            },
                            {
                              value: tabsContent[selectedTab]![1]?.profilesCount
                                ? `${
                                    tabsContent[selectedTab]![1]?.profilesCount
                                  }`
                                : '',
                              stat: 'Agents',
                            },
                          ]
                    }
                  />
                )}
              </Box>
              {tabsContent![selectedTab]?.length && (
                <RankBox
                  imageUrl={tabsContent[selectedTab]![2]?.mainImage || ''}
                  titleText={tabsContent[selectedTab]![2]?.title || ''}
                  slug={tabsContent[selectedTab]![2]?.slug || ''}
                  color="#0067b1"
                  small
                  stats={
                    isLender
                      ? [
                          {
                            value: tabsContent[selectedTab]![2]?.totalVolume
                              ? `$${formatAmount(
                                  tabsContent[selectedTab]![2]?.totalVolume
                                )}`
                              : '',
                            stat: 'Volume',
                          },
                          {
                            value: tabsContent[selectedTab]![2]?.dealsCount
                              ? `${tabsContent[selectedTab]![2]?.dealsCount}`
                              : '',
                            stat: 'Deals Closed',
                          },
                          {
                            value: tabsContent[selectedTab]![2]
                              ?.totalSquareFootage
                              ? `${formatAmount(
                                  tabsContent[selectedTab]![2]
                                    ?.totalSquareFootage
                                )}`
                              : '',
                            stat: 'Square Feet',
                          },
                        ]
                      : [
                          selectedTab !== 3
                            ? {
                                value: tabsContent[selectedTab]![2]?.totalVolume
                                  ? `$${formatAmount(
                                      tabsContent[selectedTab]![2]?.totalVolume
                                    )}`
                                  : '',
                                stat: 'Volume',
                              }
                            : {
                                value: '',
                                stat: ',',
                              },
                          {
                            value: tabsContent[selectedTab]![2]?.dealsCount
                              ? `${tabsContent[selectedTab]![2]?.dealsCount}`
                              : '',
                            stat: `${
                              selectedTab === 3
                                ? 'Leases Closed'
                                : 'Deals Closed'
                            }`,
                          },
                          {
                            value: tabsContent[selectedTab]![2]?.profilesCount
                              ? `${tabsContent[selectedTab]![2]?.profilesCount}`
                              : '',
                            stat: 'Agents',
                          },
                        ]
                  }
                />
              )}
            </Box>

            <Box
              flex={['0 0 100%', '0 0 30%', '0 0 30%', '0 0 30%']}
              maxWidth={['100%', '30%', '30%', '30%']}
              mb={2}
            >
              {tabsContent![selectedTab]?.length &&
                tabsContent[selectedTab]?.slice(3, 7)?.map((item, index) => (
                  <Box key={item?.id || index + 1} mb={2}>
                    <RankBox
                      imageUrl={item?.mainImage || ''}
                      titleText={item?.title || ''}
                      slug={item?.slug || ''}
                      color="#e6e6e8"
                      small
                      smallImage
                      stats={
                        isLender
                          ? [
                              {
                                value: item?.totalVolume
                                  ? `$${formatAmount(item?.totalVolume)}`
                                  : '',
                                stat: 'Volume',
                              },
                              {
                                value: item?.totalSquareFootage
                                  ? `$${formatAmount(item?.totalSquareFootage)}`
                                  : '',
                                stat: 'Square Feet',
                              },
                            ]
                          : [
                              selectedTab !== 3
                                ? {
                                    value: item?.totalVolume
                                      ? `$${formatAmount(item?.totalVolume)}`
                                      : '',
                                    stat: 'Volume',
                                  }
                                : {
                                    value: item?.dealsCount
                                      ? `${formatAmount(
                                          item.dealsCount.toString()
                                        )}`
                                      : '',
                                    stat: 'Leases Closed',
                                  },
                              {
                                value: item?.profilesCount
                                  ? `${formatAmount(
                                      item?.profilesCount.toString()
                                    )}`
                                  : '',
                                stat: 'Agents',
                              },
                            ]
                      }
                    />
                  </Box>
                ))}
              {(tabsContent[selectedTab] || [])?.length > 7 && (
                <Box sx={{ background: '#e6e6e8' }} width="100%">
                  <Typography>
                    {`${(tabsContent[selectedTab]?.length || 0) - 7}+ Lenders`}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      );
    };

    return (
      <Box>
        <Box m="0 auto" width="100%" maxWidth={1000}>
          <Box
            maxWidth="90%"
            m="0 auto"
            pt="50px"
            borderTop="4px solid #202124"
            textAlign="center"
          >
            <TabsSection />
            <TabsContent />
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box component="section" aria-label={title} padding="50px 0 20px">
      <Title />
      <Subtitle />
      <Cta />
      <MarketShareBoard />
    </Box>
  );
};
