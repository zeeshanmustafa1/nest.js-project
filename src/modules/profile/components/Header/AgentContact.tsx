import { BusinessCenter, Phone } from '@mui/icons-material';
import { Typography } from '@mui/material';

import { routes } from '@/constants/routes';
import { RenderIf, Tag } from '@/modules/common/components';

import type { BrokerProfileSectionProps } from '../../types';
import * as S from './styles';

export const AgentProfileHeaderContact: React.FC<BrokerProfileSectionProps> = ({
  broker,
}) => {
  return (
    <RenderIf condition={broker?.company?.title && broker?.phone}>
      <S.AgentHeaderContactWrapper
        aria-label={`${broker.name}'s and agency contact`}
      >
        <Typography
          variant="bodyExtraLarge"
          component="h4"
          aria-label={`${broker.name}'s position in ${broker.company?.title}`}
        >
          {broker?.className}
        </Typography>
        <Tag
          href={routes.agencies.getAgencyHref(broker?.company?.slug as string)}
          text={broker?.company?.title as string}
          icon={<BusinessCenter fontSize="small" />}
          ariaLabel={`${broker.name}'s agency ${broker?.company?.title}'s page in Traded Co. Click to access it.`}
        />
        <Tag
          href="#profile-contact"
          text={broker.phone as string}
          icon={<Phone fontSize="small" />}
          ariaLabel={`${broker?.name}'s phone number. Click to contact him`}
        />
      </S.AgentHeaderContactWrapper>
    </RenderIf>
  );
};
