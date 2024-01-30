import { ArrowBack } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import type { InnerSublinks, Sublinks } from '@/constants/header';
import { headerAndDrawer } from '@/constants/header';
import { SearchInput } from '@/modules/common/components';
import useWindowSize from '@/modules/common/hooks/useWindowSize';

import * as S from './styles';

interface TradedDrawerProps {
  open: boolean;
  onClose: () => void;
}

const Drawer: React.FC<TradedDrawerProps> = ({ open = false, onClose }) => {
  const [currentSubLinks, setCurrentSubLinks] = useState<Sublinks[]>([]);
  const [currentInnerSubLinks, setCurrentInnerSubLinks] = useState<
    InnerSublinks[]
  >([]);
  const { width } = useWindowSize();

  useEffect(() => {
    if (open === false) {
      setCurrentSubLinks([]);
      setCurrentInnerSubLinks([]);
    }
  }, [open]);

  return (
    <S.Drawer
      anchor="left"
      open={open}
      keepMounted
      onClose={onClose}
      PaperProps={{
        'aria-label': 'Openable side menu with useful links',
      }}
    >
      <Box
        position="absolute"
        right={15}
        top={15}
        sx={{ cursor: 'pointer' }}
        onClick={() => onClose()}
        zIndex={2}
      >
        <Image
          src="/assets/Close.svg"
          width={25}
          height={25}
          alt="Close button"
        />
      </Box>
      <S.DrawerContent>
        <SearchInput
          inputVariant="standard"
          inputWidth={width < 600 ? '100%' : '60%'}
          showSearchResultType={false}
        />

        <Box component="nav" width="100%">
          <Box
            display="flex"
            position="relative"
            justifyContent={['space-around', 'unset', 'unset', 'unset']}
          >
            <Box
              flex="0 0 30%"
              component="ul"
              sx={{ listStyle: 'none', ml: 0, p: 0 }}
            >
              {headerAndDrawer?.map((drawerLink) => (
                <Box key={drawerLink?.title} mb={4} component="li">
                  {!drawerLink?.link ? (
                    <Typography
                      variant="h5"
                      sx={{ cursor: 'pointer' }}
                      onMouseEnter={() => {
                        setCurrentSubLinks(drawerLink?.sublinks || []);
                        setCurrentInnerSubLinks([]);
                      }}
                    >
                      {drawerLink?.title}
                    </Typography>
                  ) : (
                    <Link href={drawerLink?.link || '#'} passHref>
                      <Box
                        component="a"
                        sx={{ textDecoration: 'none', color: 'white' }}
                        onMouseEnter={() => {
                          setCurrentSubLinks([]);
                          setCurrentInnerSubLinks([]);
                        }}
                        onClick={() => onClose()}
                      >
                        <Typography variant="h5" component="li">
                          {drawerLink?.title}
                        </Typography>
                      </Box>
                    </Link>
                  )}
                </Box>
              ))}
            </Box>

            <Box
              flex="0 0 40%"
              borderLeft={currentSubLinks?.length ? '1px solid white' : ''}
            >
              <Box component="ul" sx={{ listStyle: 'none', ml: 2, p: 0 }}>
                {currentSubLinks?.map((sublink) => (
                  <Box key={sublink?.title} mb={4} component="li">
                    {!sublink?.link ? (
                      <Typography
                        variant="h5"
                        sx={{ cursor: 'pointer' }}
                        onMouseEnter={() =>
                          setCurrentInnerSubLinks(sublink?.innerSubLinks || [])
                        }
                      >
                        {sublink?.title}
                      </Typography>
                    ) : (
                      <Link href={sublink?.link || '#'} passHref>
                        <Box
                          component="a"
                          sx={{ textDecoration: 'none', color: 'white' }}
                          onMouseEnter={() =>
                            setCurrentInnerSubLinks(
                              sublink.innerSubLinks as InnerSublinks[]
                            )
                          }
                          onClick={() => onClose()}
                        >
                          <Typography variant="h5" component="li">
                            {sublink?.title}
                          </Typography>
                        </Box>
                      </Link>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box>
            {currentInnerSubLinks?.length !== 0 &&
              currentInnerSubLinks !== undefined && (
                <Box
                  position="absolute"
                  right={[0, 0, -180]}
                  top={[0, 0, 0]}
                  padding="10px 10px 30px 10px"
                  width={['100%', '100%', '65%']}
                  height="-webkit-fill-available"
                  sx={{ background: '#46A78B' }}
                  display="flex"
                  flexDirection="column"
                >
                  {width < 960 && (
                    <Box display="flex" width="100%">
                      <Button onClick={() => setCurrentInnerSubLinks([])}>
                        <ArrowBack />
                      </Button>
                    </Box>
                  )}

                  <Box flex="0 0 10%" />
                  <Box
                    component="ul"
                    width={['100%', '100%', '60%']}
                    sx={{ listStyle: 'none', ml: 2, p: 0 }}
                  >
                    {currentInnerSubLinks?.map((innerLink) => (
                      <Box key={innerLink?.title} component="li" mb={4}>
                        <Link href={innerLink?.link || '#'} passHref>
                          <Box
                            component="a"
                            sx={{ textDecoration: 'none', color: 'white' }}
                            onClick={() => onClose()}
                          >
                            <Typography variant="h5">
                              {innerLink?.title}
                            </Typography>
                          </Box>
                        </Link>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
          </Box>
        </Box>
      </S.DrawerContent>

      <S.DrawerFooter>
        <Typography variant="h5">
          Recent commercial real estate transactions in NYC, Miami, LA, and
          abroad.
        </Typography>

        <ul>
          <li>Broker Analytics, And Trends</li>
          <li>CRE Trends</li>
          <li>Broker Analytics</li>
        </ul>
      </S.DrawerFooter>
    </S.Drawer>
  );
};

export { Drawer };
