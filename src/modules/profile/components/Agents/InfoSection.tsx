import type { SxProps } from '@mui/material';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

import type { Broker } from '@/__generated__/types.d';
import theme from '@/theme';
import { formatAmount } from '@/utils/helpers';
import { getUrlForPage } from '@/utils/urlMapper';

export const InfoSection: React.FC<{
  broker: Broker;
  sx?: SxProps;
  isGrid?: boolean;
  isMobile?: boolean;
}> = ({ broker, sx, isGrid = false, isMobile = false }) => {
  return (
    <Box sx={sx}>
      <Box marginBottom="0px">
        {/* Broker name */}
        <Link href={getUrlForPage('agent', broker?.slug)} passHref>
          <Typography
            variant="h3"
            component="h3"
            fontSize={[16, 26, 26, 26, 26]}
            color={theme?.palette?.black?.main}
            sx={{ textDecoration: 'none', ':hover': { cursor: 'pointer' } }}
          >
            {broker?.name}
          </Typography>
        </Link>
        {/* Broker title and company */}
        <Typography
          component="p"
          marginBottom="0rem"
          whiteSpace={isMobile ? 'nowrap' : 'normal'}
          overflow={isMobile ? 'hidden' : 'unset'}
        >
          <Typography
            component="span"
            fontWeight={500}
            fontSize={[12, 16, 16, 16, 16]}
            letterSpacing="-.02em"
            color={theme?.palette?.grey[500]}
          >
            {broker?.title ? `${broker?.title} ` : ''}
          </Typography>
          <Link href={getUrlForPage('agency', broker?.company?.slug)} passHref>
            <Typography
              component="span"
              fontWeight={500}
              fontSize={[12, 16, 16, 16, 16]}
              letterSpacing="-.02em"
              color={theme?.palette?.grey[500]}
              sx={{ textDecoration: 'none', ':hover': { cursor: 'pointer' } }}
            >
              <u>{broker?.company?.title}</u>
            </Typography>
          </Link>
        </Typography>
      </Box>

      {/* Agents Numbers */}
      <Box>
        <Box
          component="ul"
          sx={{
            margin: '0.2rem 0px',
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box component="li">
            <Typography
              fontWeight={900}
              fontSize={[14, 26, 26, 26, 26]}
              lineHeight="22px"
              margin={isMobile ? '0px 0px' : '10px 0px'}
            >
              {broker?.totalVolume
                ? `$${formatAmount(broker?.totalVolume)}`
                : '$0'}
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={[10, 16, 16, 16, 16]}
              lineHeight="16px"
            >
              Volume
            </Typography>
          </Box>

          <Box component="li" textAlign="center">
            <Typography
              fontWeight={900}
              fontSize={[14, 26, 26, 26, 26]}
              lineHeight="22px"
              margin={isMobile ? '0px 0px' : '10px 0px'}
            >
              {broker?.totalSquareFootage
                ? `${formatAmount(broker?.totalSquareFootage)}`
                : '0'}
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={[10, 16, 16, 16, 16]}
              lineHeight="16px"
            >
              Square Feet
            </Typography>
          </Box>

          <Box component="li">
            <Typography
              fontWeight={900}
              fontSize={[14, 26, 26, 26, 26]}
              lineHeight="22px"
              margin={isMobile ? '0px 0px' : '10px 0px'}
            >
              {broker?.dealsCount ?? 0}
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={[10, 16, 16, 16, 16]}
              lineHeight="16px"
            >
              Deals
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        display={isGrid ? 'block' : ['block', 'none', 'none', 'none', 'none']}
        marginTop={isGrid ? '30px' : ''}
      >
        <Button
          variant="white-button-black-text-hover-alter"
          sx={{
            border: '1px solid black',
            marginY: '5px',
            height: isMobile ? '20px' : 'auto',
          }}
          fullWidth={isMobile}
        >
          <Box
            component="a"
            href={getUrlForPage('agent', broker?.slug)}
            sx={{ color: '#000', textDecoration: 'none' }}
          >
            View Profile
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
