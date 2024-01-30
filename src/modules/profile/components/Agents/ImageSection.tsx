import type { SxProps } from '@mui/material';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import type { Broker } from '@/__generated__/types.d';
import theme from '@/theme';
import { getUrlForPage } from '@/utils/urlMapper';

export const ImageSection: React.FC<{ broker: Broker; sx?: SxProps }> = ({
  broker,
  sx,
}) => {
  return (
    <Box sx={sx}>
      <Link href={getUrlForPage('agent', broker?.slug)} passHref>
        <a>
          {broker.thumbnail ? (
            <Image
              src={broker?.thumbnail || ''}
              alt={broker?.title || 'Agent image'}
              layout="fill"
              objectFit="contain"
            />
          ) : null}
        </a>
      </Link>
      {broker?.leaderBoardTags?.length ? (
        <Box>
          <Box
            component="span"
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding={['10px 5px', '10px 5px', '10px 5px', '10px 11px 10px 8px']}
            fontSize={14}
            textAlign="center"
            position="absolute"
            left="5px"
            right="5px"
            bottom="20px"
            fontWeight={600}
            border="1px solid #d4d7e2"
            borderRadius="4px"
            lineHeight="16px"
            height="36px"
            sx={{ background: theme?.palette?.secondary?.lighter }}
          >
            {broker?.leaderBoardTags ? broker.leaderBoardTags[0] : ''}
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
