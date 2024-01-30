import { ArrowRightAlt } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Link from 'next/link';

import { RenderIf } from '@/modules/common/components';
import { getUrlForPage } from '@/utils/urlMapper';

import * as S from './styles';
import type { ProfileLastDealAndProfilePicProps } from './types';

export const ProfileLastDealAndProfilePic: React.FC<
  ProfileLastDealAndProfilePicProps
> = ({ title, pictureUrl, type, lastClosing, lastDeal, isStaticImage }) => {
  const pictureSize = type === 'Agent' ? 250 : 200;

  const pictureAriaLabel =
    type === 'Agent' ? `${title}'s profile picture` : `${title}'s logo`;
  const lastDealPrice = lastDeal?.salePrice
    ? `$${Intl.NumberFormat('en-IN', {
        maximumSignificantDigits: 3,
      }).format(lastDeal?.salePrice)}`
    : 0;

  return (
    <S.LastDealAndProfilePicWrapper aria-label="Last deal and profile image wrapper">
      <S.LastDeal aria-label="Last deal">
        {/* <RenderIf */}
        {/*  condition={ */}
        {/*    lastDeal?.feeds && lastDeal?.transactionType && lastDeal?.slug */}
        {/*  } */}
        {/* > */}
        <Link
          href={
            lastDeal?.feeds && lastDeal?.transactionType && lastDeal?.slug
              ? getUrlForPage(
                  'transaction',
                  lastDeal.slug,
                  lastDeal.feeds && lastDeal.feeds[0],
                  lastDeal.transactionType
                )
              : ''
          }
          passHref
        >
          <S.StyledLink>
            <S.LinkToLastDeal>
              <Typography variant="h4">LAST DEAL</Typography>
              <ArrowRightAlt fontSize="medium" />
            </S.LinkToLastDeal>
          </S.StyledLink>
        </Link>
        {/* </RenderIf> */}
        <RenderIf condition={Number(lastDealPrice) > 0}>
          <Typography fontSize={19} fontWeight={600}>
            {lastDeal?.salePrice
              ? `$${Intl.NumberFormat('en-IN', {
                  maximumSignificantDigits: 3,
                }).format(lastDeal?.salePrice)}`
              : ''}{' '}
          </Typography>
        </RenderIf>
        <Typography fontSize={19} fontWeight={600}>
          {lastClosing && `${lastClosing} ago`}
        </Typography>
      </S.LastDeal>

      <RenderIf condition={pictureUrl}>
        <S.PictureWrapper
          size={pictureSize}
          aria-label={pictureAriaLabel}
          pictureUrl={pictureUrl as string}
          isStaticImage={isStaticImage}
        />
      </RenderIf>
    </S.LastDealAndProfilePicWrapper>
  );
};
