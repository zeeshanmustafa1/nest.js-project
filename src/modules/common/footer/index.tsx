/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import * as I from '@mui/icons-material';
import { Button, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';

import { SearchInput } from '../components';
import useWindowSize from '../hooks/useWindowSize';
import * as S from './styles';

const Footer = () => {
  const { width } = useWindowSize();
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <Typography
          fontSize={[18, 30, 30]}
          fontWeight={900}
          lineHeight="38px"
          color="white"
          marginBottom="28px"
          component="h3"
        >
          We are telling CRE's story
        </Typography>
        <Typography
          fontSize={[12, 18, 18]}
          fontWeight={600}
          letterSpacing={1}
          lineHeight="14px"
          color="white"
          marginBottom="60px"
          component="h5"
        >
          Traded is the #1 source for cutting edge CRE transactions & insights.
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={['column', 'column', 'row']}
          sx={{
            justifyContent: 'space-between',
            paddingY: 2,
            paddingZ: 10,
          }}
        >
          <Box>
            <Link href="/">
              <Image
                src="/traded-logo.png"
                alt="Traded Logo"
                width={160}
                height={40}
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </Box>
          <Box
            display="flex"
            sx={{
              flexDirection: 'column',
            }}
          >
            <Typography
              fontSize={[12, 18, 18]}
              fontWeight={600}
              letterSpacing={1}
              lineHeight="14px"
              color="white"
              marginBottom="20px"
              marginTop="20px"
              component="p"
            >
              Find Deals
            </Typography>
            <Link href="/deals" passHref>
              <S.StyleLink>Search</S.StyleLink>
            </Link>
            <Link href="/deals" passHref>
              <S.StyleLink>Map</S.StyleLink>
            </Link>
          </Box>
          <Box
            display="flex"
            sx={{
              flexDirection: 'column',
            }}
          >
            <Typography
              fontSize={[12, 18, 18]}
              fontWeight={600}
              letterSpacing={1}
              lineHeight="14px"
              color="white"
              marginBottom="20px"
              marginTop="20px"
              component="p"
            >
              About Traded
            </Typography>
            <Link href="/faq" passHref>
              <S.StyleLink>FAQ</S.StyleLink>
            </Link>
            <Link href="/testimonials" passHref>
              <S.StyleLink>Testimonials</S.StyleLink>
            </Link>
          </Box>
          <Box
            display="flex"
            sx={{
              flexDirection: 'column',
            }}
          >
            <Typography
              fontSize={[12, 18, 18]}
              fontWeight={600}
              letterSpacing={1}
              lineHeight="14px"
              color="white"
              marginBottom="20px"
              marginTop="20px"
              component="p"
            >
              Support
            </Typography>
            <Link href="mailto:submit@traded.co" passHref>
              <S.StyleLink>Contact Us</S.StyleLink>
            </Link>
          </Box>
        </Box>
        <S.DividerWrapper>
          <Divider
            sx={{
              borderColor: '#3E554A',
              width: '100%',
            }}
          />
        </S.DividerWrapper>
        <Box
          display="flex"
          flexDirection={['column', 'column', 'row']}
          marginY={5}
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            variant="neon-green"
            size="large"
            aria-label="Submit a deal"
            href="http://submit.traded.co"
            sx={{ borderRadius: 3, boxShadow: 'none' }}
          >
            Submit
          </Button>
          <S.StyledButtonWrapper>
            <Box display="flex" flexDirection="row" justifyContent="center">
              <S.StyledButton>
                <a
                  href="https://twitter.com/tradedny"
                  target="_blank"
                  rel="noreferrer"
                >
                  <I.Twitter style={{ color: 'white' }} />
                </a>
              </S.StyledButton>
              <S.StyledButton>
                <a
                  href="https://www.facebook.com/Tradedny/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <I.Facebook style={{ color: 'white' }} />
                </a>
              </S.StyledButton>
              <S.StyledButton>
                <a
                  href="https://www.instagram.com/tradedny/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <I.Instagram style={{ color: 'white' }} />
                </a>
              </S.StyledButton>
              <S.StyledButton>
                <a
                  href="https://www.pinterest.com/tradedny/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <I.Pinterest style={{ color: 'white' }} />
                </a>
              </S.StyledButton>
            </Box>
          </S.StyledButtonWrapper>
          <SearchInput
            inputWidth={width < 900 ? '100%' : '30%'}
            showSearchResultType={false}
            textInputStyles={{
              borderRadius: '20px',
              textDecoration: 'none',
              backgroundColor: '#3E554A',
              color: 'white',
              marginTop: width < 900 ? `20px` : '0px',
            }}
          />
        </Box>
      </S.FooterContainer>
      <Box
        display="flex"
        flexDirection={['column', 'column', 'row']}
        justifyContent="space-between"
        paddingX="2%"
        paddingY="1%"
        borderTop="1px solid #425b4f"
        alignItems="baseline"
      >
        <Typography
          fontSize={[12, 15, 15]}
          sx={{ color: 'white' }}
          component="p"
        >
          © 2022 Traded Media LLC . All rights reserved.
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <Link href="/faq">
            <Typography
              color="white"
              fontSize={[10, 10, 14]}
              sx={{ cursor: 'pointer' }}
            >
              FAQ
            </Typography>
          </Link>
          <Typography marginX="20px" color="white">
            |
          </Typography>
          <Link href="/terms-and-conditions">
            <Typography
              color="white"
              fontSize={[10, 10, 14]}
              sx={{ cursor: 'pointer' }}
            >
              Terms & Conditions
            </Typography>
          </Link>
          <Typography marginX="20px" color="white">
            |
          </Typography>
          <Link href="/privacy-policy">
            <Typography
              color="white"
              fontSize={[10, 10, 14]}
              sx={{ cursor: 'pointer' }}
            >
              Privacy
            </Typography>
          </Link>
          <Typography marginX="20px" color="white">
            |
          </Typography>
          <Link href="/disclaimer">
            <Typography
              color="white"
              fontSize={[10, 10, 14]}
              sx={{ cursor: 'pointer' }}
            >
              Disclaimer
            </Typography>
          </Link>
          <Typography marginX="20px" color="white">
            |
          </Typography>
          <Link href="/cookie-policy">
            <Typography
              color="white"
              fontSize={[10, 10, 14]}
              sx={{ cursor: 'pointer' }}
            >
              Cookie Policy
            </Typography>
          </Link>
          <Typography marginX="20px" color="white">
            |
          </Typography>
          <Link href="/do-not-sell-my-info">
            <Typography
              color="white"
              fontSize={[10, 10, 14]}
              sx={{ cursor: 'pointer' }}
            >
              Do Not Sell My Info
            </Typography>
          </Link>
          <Typography marginX="20px" color="white">
            |
          </Typography>
          <Link href="/acceptable-use-policy">
            <Typography
              color="white"
              fontSize={[10, 10, 14]}
              sx={{ cursor: 'pointer' }}
            >
              Acceptable Use
            </Typography>
          </Link>
        </Box>
      </Box>
    </S.FooterWrapper>
  );
};

export { Footer };
