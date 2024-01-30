import { Typography } from '@mui/material';
import Image from 'next/image';

import { profileSectionByIcon } from '@/constants/profile';

import type { ProfileSections } from '../../types';
import { Divider } from '../Divider';
import * as S from './styles';

export interface ProfileSectionTitleProps {
  sectionName: ProfileSections;
  extraInfo?: string;
}

export const ProfileSectionTitle: React.FC<ProfileSectionTitleProps> = ({
  sectionName,
  extraInfo = '',
}) => {
  return (
    <S.ProfileSectionTitleContainer>
      <S.ProfileSectionTitleWrapper>
        <S.ProfileSectionIcon>
          <Image
            src={profileSectionByIcon[sectionName]}
            alt=""
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            loading="lazy"
          />
        </S.ProfileSectionIcon>
        <Typography variant="h2">
          {sectionName}
          {extraInfo}
        </Typography>
      </S.ProfileSectionTitleWrapper>

      <Divider />
    </S.ProfileSectionTitleContainer>
  );
};
