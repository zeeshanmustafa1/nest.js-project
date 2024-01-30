import type { SxProps } from '@mui/material';
import { Typography } from '@mui/material';
import Image from 'next/image';

import { RenderIf } from '@/modules/common/components';
import theme from '@/theme';
import { generateElipsesDescription } from '@/utils/helpers';

import type { ProfileSectionProps } from '../../types';
import * as S from './styles';

export interface ProfileHeaderProps extends ProfileSectionProps {
  titleStylesOverride?: SxProps;
  scrollTo?: Function;
  bolderNoQuote?: boolean;
  isMobile?: boolean;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  broker,
  agency,
  deal,
  scrollTo,
  titleStylesOverride,
  bolderNoQuote = false,
  isMobile = false,
}) => {
  const data = {
    title:
      broker?.name ||
      agency?.title ||
      (deal?.title &&
        (deal?.title.length <= 90
          ? deal?.title
          : generateElipsesDescription(deal?.title?.slice(0, 90)))),
    description:
      (broker?.bio &&
        (broker?.bio?.length <= 150
          ? broker?.bio
          : generateElipsesDescription(broker?.bio?.slice(0, 150)))) ||
      (broker?.bioSummary &&
        (broker?.bioSummary?.length <= 150
          ? broker?.bioSummary
          : generateElipsesDescription(broker?.bioSummary?.slice(0, 150)))) ||
      (agency?.description &&
        (agency?.description?.length <= 140
          ? agency?.description
          : generateElipsesDescription(agency?.description?.slice(0, 140)))) ||
      deal?.description,
    isBroker: !!broker?.bio,
    phone: broker?.phone || agency?.contactPhone,
    role: broker?.className,
    pictureUrl: broker?.thumbnail || agency?.logoUrl || deal?.mainImage,
  };

  return (
    <S.ProfileHeaderWrapper>
      <RenderIf condition={agency?.title && agency?.logoUrl}>
        <Typography
          variant="h3"
          component="h3"
          aria-label={`${data?.title}`}
          sx={titleStylesOverride}
        >
          <Image
            src={agency?.logoUrl || '/assets/Dummy/240x240.png'}
            alt={`${data?.title}-image`}
            width={100}
            height={100}
          />
        </Typography>
      </RenderIf>
      {broker && (
        <S.PictureWrapper>
          <Image
            src={data.pictureUrl as string}
            alt="Picture of the author"
            width="160px"
            height="160px"
            style={{ borderRadius: '50%' }}
          ></Image>
        </S.PictureWrapper>
      )}

      <Typography
        variant="h1"
        component="h1"
        aria-label={`${data?.title}`}
        sx={titleStylesOverride}
      >
        {data?.title}
      </Typography>
      <RenderIf condition={data.description}>
        {bolderNoQuote ? (
          <Typography
            width={['fit-content', 'fit-content', 700]}
            margin="0 auto"
            fontSize={20}
            fontWeight={600}
            lineHeight="24px"
            paddingY={1}
            fontStyle="italic"
            color={theme.palette.grey[500]}
            paddingBottom={isMobile ? 10 : 3}
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {data?.description}
          </Typography>
        ) : (
          <Typography
            variant="bodyLarge"
            paddingBottom={isMobile ? 10 : 3}
            component="p"
            width={['fit-content', 'fit-content', 700]}
            margin="0 auto"
            aria-label={`${data.title}'s biography`}
            onClick={() => scrollTo && scrollTo(6)}
            sx={{
              cursor: 'pointer',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
            }}
          >
            &quot;
            {data.description}
            &quot;
          </Typography>
        )}
      </RenderIf>
    </S.ProfileHeaderWrapper>
  );
};
