import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { headerAndDrawer } from '@/constants/header';

import * as S from './styles';

export const HeaderLinks = () => {
  return (
    <Box display={['none', 'none', 'block', 'block']}>
      <S.HeaderLinksWrapper aria-label="Links to navigate through website">
        {headerAndDrawer?.map((drawerLink) => (
          <S.HeaderLinkWrapper key={drawerLink?.title}>
            <Link href={drawerLink?.link || '#'} passHref>
              <a>
                <Typography variant="body" fontSize={14} fontWeight={600}>
                  {drawerLink?.title}
                </Typography>
                {drawerLink?.sublinks && (
                  <Image
                    alt="Collapse down icon"
                    src="/assets/CollapseDown.svg"
                    width={10}
                    height={10}
                  />
                )}
              </a>
            </Link>
            <S.HeaderSubLinkWrapper>
              {drawerLink?.sublinks?.map((sublink) => (
                <S.HeaderSubLinkListItem key={sublink?.title}>
                  <Link href={sublink?.link || ''} passHref>
                    <S.HeaderSubLink>
                      <Box ml={2}>{sublink?.title}</Box>
                      {sublink?.innerSubLinks && (
                        <Box
                          position="absolute"
                          right={10}
                          sx={{ transform: 'rotate(-90deg)' }}
                        >
                          <Image
                            src="/assets/CollapseDown.svg"
                            alt="Arrow Icon Down"
                            height={10}
                            width={15}
                          />
                        </Box>
                      )}
                    </S.HeaderSubLink>
                  </Link>

                  <S.HeaderInnerSubLinkWrapper>
                    {sublink?.innerSubLinks?.map((innerSublink) => (
                      <S.HeaderInnerSubLinkListItem key={innerSublink?.title}>
                        <Link href={innerSublink?.link || ''} passHref>
                          <S.HeaderSubLink>
                            <Box ml={2}>{innerSublink?.title}</Box>
                          </S.HeaderSubLink>
                        </Link>
                      </S.HeaderInnerSubLinkListItem>
                    ))}
                  </S.HeaderInnerSubLinkWrapper>
                </S.HeaderSubLinkListItem>
              ))}
            </S.HeaderSubLinkWrapper>
          </S.HeaderLinkWrapper>
        ))}
      </S.HeaderLinksWrapper>
    </Box>
  );
};
