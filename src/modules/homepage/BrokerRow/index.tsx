import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import type { Broker } from '@/__generated__/types.d';
import { BrokerAvatarLink } from '@/modules/common/components/BrokerAvatarLink';

import * as S from './styles';

const traderRowTitleByIconPath: Record<IBrokerRow['title'], string> = {
  Hot: '/assets/Icon/Colored/Fire.svg',
  'Rising Star': '/assets/Icon/Colored/Star.svg',
  Unicorns: '/assets/Icon/Colored/Unicorn.svg',
  Founder: '/assets/Icon/Colored/Founder.svg',
};

const amountOftradersPerSection = 4;

const TraderList: React.FC<IBrokerRow> = ({ brokers, description, title }) => {
  return (
    <S.BrokersListWrapper>
      <S.BrokerListHeader>
        <Typography variant="h4" component="h3">
          <Image
            alt="title icon"
            src={traderRowTitleByIconPath[title]}
            width={30}
            height={30}
            loading="lazy"
          />
          {title}
        </Typography>
        <p>{description}</p>
      </S.BrokerListHeader>
      <S.BrokersAvatars>
        {brokers.slice(0, amountOftradersPerSection).map((br: Broker) => (
          <BrokerAvatarLink key={br.id} broker={br} />
        ))}
        <BrokerAvatarLink
          text={
            brokers?.length > amountOftradersPerSection
              ? `${brokers.length - amountOftradersPerSection}+`
              : '0'
          }
          link="/leaderboard"
        />
      </S.BrokersAvatars>
    </S.BrokersListWrapper>
  );
};

interface BrokerRowsProps {
  brokerRows: IBrokerRow[];
}
const BrokerRows: React.FC<BrokerRowsProps> = ({ brokerRows }) => {
  return (
    <S.BrokersRowWrapper>
      <S.BrokersRowContainer>
        {brokerRows.map((brokerRow) => (
          <TraderList key={brokerRow.title} {...brokerRow} />
        ))}
      </S.BrokersRowContainer>
    </S.BrokersRowWrapper>
  );
};

export { BrokerRows };
