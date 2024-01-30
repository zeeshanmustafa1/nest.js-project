import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import type { MouseEventHandler } from 'react';

import type { Broker } from '@/__generated__/types.d';
import { routes } from '@/constants/routes';
import { formatAmount } from '@/utils/helpers';

import { Divider } from '../Divider';
import * as S from './styles';

export const RelationshipCard: React.FC<{
  broker: Broker;
  onclick?: MouseEventHandler<HTMLDivElement> | undefined;
}> = ({ broker, onclick }) => {
  if (!broker?.thumbnail) {
    return null;
  }

  return (
    <Box onClick={onclick}>
      <S.CardWrapper isAgentImage>
        <S.CardHoverContent className="relationships-stats">
          <Link
            href={routes.agents.getAgentHref(broker.slug || '/agents')}
            passHref
          >
            <S.StyledAnchor>
              <Typography variant="text" fontSize={14}>
                {broker?.name}
              </Typography>
            </S.StyledAnchor>
          </Link>
          <Typography variant="bodySmall" className="total-dealt">
            {formatAmount(broker?.totalVolume)}
          </Typography>
          <Divider color="#fff" sx={{ margin: '8px 0px !important' }} />
          <Typography variant="bodySmall">{`${broker?.numberOfDealsTogether} deals together ${broker?.firstDealTogether} history`}</Typography>
        </S.CardHoverContent>
        <S.AmountOfDealsBadge
          aria-label={`${broker?.name}'s quantity of deals made`}
        >
          <Typography variant="text">{broker?.dealsCount}</Typography>
        </S.AmountOfDealsBadge>
        <S.CardContent>
          <Image
            alt={`${broker?.name}'s profile picture`}
            src={broker?.thumbnail}
            width="100%"
            height="100%"
            layout="responsive"
            loading="lazy"
            objectFit="contain"
            objectPosition="0% 100%"
          />
        </S.CardContent>
      </S.CardWrapper>
    </Box>
  );
};
