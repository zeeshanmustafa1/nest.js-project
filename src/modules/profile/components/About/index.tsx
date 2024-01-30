import { Box } from '@mui/material';
import Image from 'next/image';

import { ReadMore, RenderIf, Tag } from '@/modules/common/components';

import type { ProfileSectionProps } from '../../types';
import { ProfileSectionTitle } from '../SectionTitle';
import * as S from './styles';

export const About: React.FC<ProfileSectionProps> = ({ agency }) => {
  const data = {
    title: agency?.title,
    description: agency?.description,
  };

  return (
    <S.AboutWrapper>
      <ProfileSectionTitle sectionName="About" extraInfo={` ${data.title}`} />
      <Box display="flex">
        <RenderIf condition={data?.title as string}>
          <Tag
            text={data?.title as string}
            icon={
              <Image
                src="/assets/Icon/Colored/Briefcase.svg"
                alt="Agency Title"
                width={16}
                height={16}
              />
            }
          />
        </RenderIf>
      </Box>
      <RenderIf condition={data?.description}>
        <Box padding="20px 0">
          <ReadMore
            description={data?.description as string}
            customSlice={320}
          />
        </Box>
      </RenderIf>
    </S.AboutWrapper>
  );
};
