import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import { profileSectionByIcon } from '@/constants/profile';
import { RenderIf } from '@/modules/common/components';

import { ProfileSectionContainer } from '../../styles';
import type { ProfileSectionProps } from '../../types';
import * as S from './styles';

export const DealOnSocial: React.FC<ProfileSectionProps> = ({ deal }) => {
  const instagramId = deal?.instagramId;
  const caption = deal?.caption?.replaceAll('&amp;', '&');
  return (
    <ProfileSectionContainer id="deal-info">
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box
          component="figure"
          height={['40px', '40px', '60px']}
          width={['40px', '40px', '60px']}
        >
          <Image
            src={profileSectionByIcon.Social}
            alt=""
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            loading="lazy"
          />
        </Box>
        <Typography variant="h2" component="h3">
          Social
        </Typography>
      </Box>
      <S.DealSocialAndContent>
        <S.DealOnSocialContainer>
          <RenderIf condition={instagramId}>
            <S.DealInstagramSocialEmbed
              src={`https://www.instagram.com/p/${instagramId}/embed/captioned/`}
            />
          </RenderIf>
        </S.DealOnSocialContainer>
        <S.DealTextContentContainer>
          <Box borderBottom="1px solid #D4D7E2" paddingY={1}>
            <Typography variant="bodyLarge">Text Context:</Typography>
          </Box>
          <S.DealTextContent>{caption}</S.DealTextContent>
        </S.DealTextContentContainer>
      </S.DealSocialAndContent>
    </ProfileSectionContainer>
  );
};
