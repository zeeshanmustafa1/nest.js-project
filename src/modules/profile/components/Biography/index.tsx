import { Phone } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import { profileSectionByIcon } from '@/constants/profile';
import { routes } from '@/constants/routes';
import { ReadMore, RenderIf, Tag } from '@/modules/common/components';

import type { ProfileSectionProps } from '../../types';
import { ProfileLeaderboardsHighlights } from '../LeaderboardsHighlights';
import * as S from './styles';

export const Biography: React.FC<ProfileSectionProps> = ({ broker }) => {
  const data = {
    bio: broker?.bio,
    bioSummary: broker?.bioSummary,
    tags: broker?.leaderBoardTags,
    companyTitle: broker?.company?.title,
    companySlug: broker?.company?.slug,
    phone: broker?.phone,
  };

  return (
    <S.BiographyWrapper>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box
          component="figure"
          height={['40px', '40px', '60px']}
          width={['40px', '40px', '60px']}
        >
          <Image
            src={profileSectionByIcon.Bio}
            alt=""
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            loading="lazy"
          />
        </Box>
        <Typography variant="h2" component="h3">
          Bio
        </Typography>
      </Box>
      <RenderIf condition={!!data?.tags}>
        <ProfileLeaderboardsHighlights
          tags={data.tags as string[]}
          title={broker?.name || ''}
          isStatHighlight={false}
        />
      </RenderIf>
      <Box display="flex">
        <RenderIf
          condition={
            (data?.companyTitle as string) && (data?.companySlug as string)
          }
        >
          <Tag
            text={data?.companyTitle as string}
            href={routes.agencies.getAgencyHref(data?.companySlug as string)}
            icon={
              <Image
                alt=""
                src={broker?.company?.logoUrl || '/assets/Agency.svg'}
                width={16}
                height={16}
              />
            }
          />
        </RenderIf>

        <RenderIf condition={data?.phone as string}>
          <Tag
            text={data?.phone as string}
            href={`tel:${data?.phone as string}`}
            icon={<Phone sx={{ width: 16, height: 16 }} />}
          />
        </RenderIf>
      </Box>
      <RenderIf condition={data?.bio && data?.bioSummary}>
        <Box padding="20px 0">
          <ReadMore description={data?.bio as string} customSlice={320} />
        </Box>
      </RenderIf>
    </S.BiographyWrapper>
  );
};
