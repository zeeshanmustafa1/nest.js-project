import { Typography } from '@mui/material';

import { RenderIf } from '@/modules/common/components';
import { getStatisticSummaryData } from '@/utils/data/statsSummary';

import type { ProfileSectionProps } from '../../types';
import * as S from './styles';

export const ProfileStatisticsSummary: React.FC<ProfileSectionProps> = ({
  agency,
  broker,
}) => {
  const profile = { broker, agency };
  const statsData =
    getStatisticSummaryData(profile as ProfileSectionProps) || [];
  return (
    <S.StatsSummaryContainer>
      {statsData.map((stat) => (
        <RenderIf condition={!!stat.value} key={stat.label}>
          <S.StatSummary>
            <Typography variant="h2" component="h4">
              {stat.value}
            </Typography>
            <Typography variant="bodySmall" component="p">
              {stat.label}
            </Typography>
          </S.StatSummary>
        </RenderIf>
      ))}
    </S.StatsSummaryContainer>
  );
};
