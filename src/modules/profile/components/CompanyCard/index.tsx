import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { BrokerAvatarLink } from '@/modules/common/components';
import theme from '@/theme';
import { getUrlForPage } from '@/utils/urlMapper';

import * as S from './styles';
import type { CompanyCardProps } from './types';

export const CompanyCard: React.FC<CompanyCardProps> = ({ company, index }) => {
  const getNumberFormat = (num: string) => {
    return Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(parseInt(num, 10));
  };
  const colors = {
    0: '#0067B1',
    1: '#002855',
    2: '#E20613',
    3: '#0067B1',
    4: '#002855',
    5: '#E20613',
  };
  return (
    <S.CompanyCardWrapper>
      <S.ImageWrapper color={colors[index as keyof typeof colors]}>
        <Box
          display="flex"
          flexDirection="row"
          height="50px"
          justifyContent="flex-start"
        >
          <Box height="60px" width="60px">
            <Link href={getUrlForPage('agency', company?.slug)}>
              <a>
                <S.CompanyImageWrapper>
                  <Image
                    src={company?.mainImage ?? '/assets/Dummy/65x65.png'}
                    alt=""
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                    priority
                  />
                </S.CompanyImageWrapper>
              </a>
            </Link>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          width="100%"
          justifyContent={['flex-start', 'flex-start', 'center']}
        >
          {company.agents?.map((agent) => (
            <S.AvatarWrapper key={agent.slug}>
              <BrokerAvatarLink
                key={agent.slug}
                broker={agent}
                link={getUrlForPage('agent', agent.slug)}
              />
            </S.AvatarWrapper>
          ))}
          {company.profilesCount && company?.profilesCount > 7 && (
            <S.AvatarWrapper>
              <BrokerAvatarLink
                text={`${company.profilesCount - 7}+`}
                fullWidth={true}
              />
            </S.AvatarWrapper>
          )}
        </Box>
      </S.ImageWrapper>

      <S.InfoWrapper>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginBottom="20px"
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
          >
            <Typography
              fontWeight={900}
              fontSize={[16, 26, 26, 26, 26]}
              lineHeight="22px"
              margin="10px 0"
            >
              {getNumberFormat(company.totalSquareFootage)}
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={11}
              letterSpacing=".1em"
              color={theme?.palette?.grey['500']}
              textTransform="uppercase"
              whiteSpace="nowrap"
            >
              Square Feet
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginBottom="20px"
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
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyItems="flex-start"
          paddingTop="10px"
        >
          <Typography
            fontWeight={600}
            fontSize={12}
            letterSpacing=".1em"
            color={theme?.palette?.grey['500']}
            whiteSpace="nowrap"
            minWidth="30%"
          >
            Last Deal
          </Typography>
          <Typography fontWeight={600} fontSize={12} letterSpacing=".1em">
            {company.lastClosing}
          </Typography>
        </Box>
        {company.address && (
          <Box
            display="flex"
            flexDirection="row"
            justifyItems="flex-start"
            paddingTop="10px"
          >
            <Typography
              fontWeight={600}
              fontSize={12}
              letterSpacing=".1em"
              color={theme?.palette?.grey['500']}
              whiteSpace="nowrap"
              minWidth="30%"
            >
              Address
            </Typography>
            <Typography fontWeight={600} fontSize={12} letterSpacing=".1em">
              {company.address}
            </Typography>
          </Box>
        )}
        <Box
          display="flex"
          flexDirection="row"
          justifyItems="flex-start"
          paddingTop="10px"
        >
          <Typography
            fontWeight={600}
            fontSize={12}
            letterSpacing=".1em"
            color={theme?.palette?.grey['500']}
            whiteSpace="nowrap"
            minWidth="30%"
          >
            Active In
          </Typography>
          <Typography fontWeight={600} fontSize={12} letterSpacing=".1em">
            {company.stateTypesDropdown?.length
              ? `${company.stateTypesDropdown?.splice(0, 3).join(', ')}${
                  company.stateTypesDropdown.length > 3
                    ? ` and ${company.stateTypesDropdown.length - 3}+`
                    : ''
                }`
              : 'N/A'}
          </Typography>
        </Box>
      </S.InfoWrapper>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth="450px"
        padding="20px"
      >
        <Typography fontWeight={900} fontSize={30} component="h3">
          {company.title}
        </Typography>
        <Typography fontWeight={300} fontSize={16}>
          {`${company.description?.split(' ').slice(0, 35).join(' ')}....`}
        </Typography>
        <Box display="block" marginTop="30px">
          <Button
            variant="white-button-black-text-hover-alter"
            sx={{ border: '1px solid black', marginBottom: '5px' }}
          >
            <Box
              component="a"
              href={getUrlForPage('agency', company?.slug)}
              sx={{ color: '#000', textDecoration: 'none' }}
            >
              View Agency
            </Box>
          </Button>
        </Box>
      </Box>
    </S.CompanyCardWrapper>
  );
};
