import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import type { Broker } from '@/__generated__/types.d';

import { RenderIf } from '../RenderIf';
import * as S from './styles';

const AgentCard: React.FC<{ agent: Broker }> = ({ agent }) => {
  return (
    <RenderIf condition={!!agent} key={agent?.name}>
      <S.DealProfileWrapper>
        <Link href={`/agent/${agent?.slug}/`} passHref>
          <a>
            <Image
              src={agent?.thumbnail || '/assets/Dummy/150x150.png'}
              alt={agent?.name}
              width={120}
              height={120}
            />
          </a>
        </Link>
        <S.DealProfileStatsWrapper>
          <Link href={`/agent/${agent?.slug}` as string} passHref>
            <a>
              <Typography variant="bodyLarge" component="h3">
                {agent?.name}
              </Typography>
            </a>
          </Link>
          <S.DealProfileStat>
            <RenderIf condition={agent?.company?.slug as string}>
              <Link
                href={`/${agent?.company?.type?.toLowerCase()}/${
                  agent?.company?.slug as string
                }`}
                passHref
              >
                <a>
                  <Typography fontSize={14} component="span" fontWeight={300}>
                    {agent?.company?.title}
                  </Typography>
                </a>
              </Link>
            </RenderIf>
          </S.DealProfileStat>
          <S.DealProfileStat>
            <Typography fontSize={14} marginRight={2} component="span">
              Deals
            </Typography>
            <Typography fontSize={14} component="span">
              {agent?.dealsCount}
            </Typography>
          </S.DealProfileStat>
          <S.DealProfileStat>
            {agent.totalFinanced !== '0' || agent.totalSold !== '0' ? (
              <Typography fontSize={14} component="span" marginRight={2}>
                {parseInt(agent?.totalSold, 10) >
                parseInt(agent.totalFinanced, 10)
                  ? 'Sold'
                  : 'Financed'}
              </Typography>
            ) : (
              <Typography fontSize={14} component="span" marginRight={2}>
                Leased
              </Typography>
            )}
            {agent.totalFinanced !== '0' || agent.totalSold !== '0' ? (
              <Typography fontSize={14} component="span">
                {`$ ${
                  parseInt(agent?.totalSold, 10) >
                  parseInt(agent.totalFinanced, 10)
                    ? parseInt(agent?.totalSold, 10).toLocaleString()
                    : parseInt(agent?.totalFinanced, 10).toLocaleString()
                }`}
              </Typography>
            ) : (
              <Typography fontSize={14} component="span">
                {`${agent.totalLeaseDeals}`}
              </Typography>
            )}
          </S.DealProfileStat>
        </S.DealProfileStatsWrapper>
      </S.DealProfileWrapper>
    </RenderIf>
  );
};

export default AgentCard;
