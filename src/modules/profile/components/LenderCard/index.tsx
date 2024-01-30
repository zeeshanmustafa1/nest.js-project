import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { RenderIf } from '@/modules/common/components';
import theme from '@/theme';
import { getUrlForPage } from '@/utils/urlMapper';

import { SocialMediaLink } from '../SocialMediaLinks/SocialMediaLink';
import * as S from './styles';
import type { LenderCardProps } from './types';

export const LenderCard: React.FC<LenderCardProps> = ({ company }) => {
  const getNumberFormat = (num: string) => {
    return Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(parseInt(num, 10));
  };
  return (
    <S.CompanyCardWrapper>
      <a>
        <S.ImageWrapper>
          <Link href={getUrlForPage('lender', company?.slug)}>
            <Image
              src={(company.mainImage as string) || '/assets/Dummy/240x240.png'}
              alt={company.slug as string}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              style={{ cursor: 'pointer' }}
            />
          </Link>
        </S.ImageWrapper>
      </a>

      <S.InfoWrapper>
        <Box>
          <Typography
            fontWeight={900}
            fontSize={30}
            paddingLeft="15px"
            component="h2"
          >
            {company.title}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="flex-start">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginBottom="20px"
            paddingX="20px"
          >
            <Typography
              fontWeight={900}
              fontSize={[16, 26, 26, 26, 26]}
              lineHeight="22px"
              margin="10px 0"
            >
              {`$${getNumberFormat(company.totalVolume)}`}
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={11}
              letterSpacing=".1em"
              color={theme?.palette?.grey['500']}
              textTransform="uppercase"
            >
              Volume
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginBottom="20px"
            paddingX="20px"
          >
            <Typography
              fontWeight={900}
              fontSize={[16, 26, 26, 26, 26]}
              lineHeight="22px"
              margin="10px 0"
            >
              {company?.dealsCount}
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={11}
              letterSpacing=".1em"
              color={theme?.palette?.grey['500']}
              textTransform="uppercase"
            >
              Deals
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginBottom="20px"
            paddingX="20px"
          >
            <Typography
              fontWeight={900}
              fontSize={[16, 26, 26, 26, 26]}
              lineHeight="22px"
              margin="10px 0"
            >
              {getNumberFormat(company?.totalSquareFootage)}
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={11}
              letterSpacing=".1em"
              color={theme?.palette?.grey['500']}
              textTransform="uppercase"
            >
              Square Feet
            </Typography>
          </Box>
        </Box>
      </S.InfoWrapper>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth="450px"
        padding="20px"
      >
        <Box display="flex" flexDirection="row">
          <RenderIf condition={company.linkedinUrl}>
            <SocialMediaLink
              href={company.linkedinUrl}
              aria-label={`${company?.title}'s LinkedIn profile`}
            >
              <LinkedIn />
            </SocialMediaLink>
          </RenderIf>
          <RenderIf condition={company.twitterUrl}>
            <SocialMediaLink
              href={company.twitterUrl}
              aria-label={`${company?.title}'s Twitter profile`}
            >
              <Twitter />
            </SocialMediaLink>
          </RenderIf>
          <RenderIf condition={company.facebookUrl}>
            <SocialMediaLink
              href={company.facebookUrl}
              aria-label={`${company?.title}'s Facebook profile`}
            >
              <FacebookRounded />
            </SocialMediaLink>
          </RenderIf>
          <RenderIf condition={company.instagramUrl}>
            <SocialMediaLink
              href={company.instagramUrl}
              aria-label={`${company?.title}'s Instagram profile`}
            >
              <Instagram />
            </SocialMediaLink>
          </RenderIf>
        </Box>
        <Box display="block" marginTop="30px">
          <Button
            variant="white-button-black-text-hover-alter"
            sx={{ border: '1px solid black', marginBottom: '5px' }}
          >
            <Box
              component="a"
              href={getUrlForPage('lender', company?.slug)}
              sx={{ color: '#000', textDecoration: 'none' }}
            >
              View Lender
            </Box>
          </Button>
        </Box>
      </Box>
    </S.CompanyCardWrapper>
  );
};
