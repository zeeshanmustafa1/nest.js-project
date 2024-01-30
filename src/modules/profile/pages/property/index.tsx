import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import { useRef } from 'react';

import type { Deal } from '@/__generated__/types.d';
import { socialMediaLinks } from '@/constants/profile';

import type {
  DealintroImageProps,
  ProfileHeaderProps,
  ProfileMenuNavProps,
  ProfileTransactionProps,
} from '../../components';
import { DealMapImage } from '../../components/DealMapImage';
import type { ProfileSectionProps } from '../../types';
import * as S from '../styles';

interface DealProfileProps {
  deal: Deal;
  comparables?: Deal[];
}

const DynamicDealInfo = dynamic<ProfileSectionProps>(() =>
  import('../../components').then((comp) => comp.DealInfo)
);
const DynamicDealIntroImage = dynamic<DealintroImageProps>(() =>
  import('../../components').then((comp) => comp.DealIntroImage)
);
const DynamicDealOnSocial = dynamic<ProfileSectionProps>(() =>
  import('../../components').then((comp) => comp.DealOnSocial)
);
const DynamicProfileContact = dynamic<ProfileSectionProps>(() =>
  import('../../components').then((comp) => comp.ProfileContact)
);
const DynamicProfileHeader = dynamic<ProfileHeaderProps>(() =>
  import('../../components').then((comp) => comp.ProfileHeader)
);
const DynamicProfileMenuNav = dynamic<ProfileMenuNavProps>(() =>
  import('../../components').then((comp) => comp.ProfileMenuNav)
);
const DynamicProfileSocialMediaLinks = dynamic<ProfileSectionProps>(() =>
  import('../../components').then((comp) => comp.ProfileSocialMediaLinks)
);
const DynamicProfileTransactions = dynamic<ProfileTransactionProps>(() =>
  import('../../components').then((comp) => comp.ProfileTransactions)
);

export const DealProfilePage: React.FC<DealProfileProps> = ({
  deal,
  comparables,
}) => {
  const transactionRef = useRef<Array<HTMLElement | null>>([]);

  const scrollTo = (index: number) => {
    const y =
      (transactionRef.current[index]?.getBoundingClientRect()?.top || 0) +
      window.pageYOffset -
      20;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  const latitude = deal?.properties ? deal?.properties[0]?.latitude : null;
  const longitude = deal?.properties ? deal?.properties[0]?.longitude : null;
  const propertyStatus = {
    Sale: 'sold',
    Loan: 'loan',
    Lease: 'leased',
  };

  return (
    <S.ProfilePage>
      <Box paddingBottom={8} paddingTop={6}>
        {deal?.mainImage ? (
          <DynamicDealIntroImage
            image={deal?.mainImage as string}
            alt={deal?.title as string}
          />
        ) : (
          <DealMapImage
            salePrice={deal?.salePrice}
            longitude={longitude}
            latitude={latitude}
            brokers={deal?.profiles}
          />
        )}
        <DynamicProfileHeader
          deal={deal}
          bolderNoQuote
          titleStylesOverride={{
            fontSize: 44,
            lineHeight: '42px',
            textAlign: 'center',
            letterSpacing: '-0.02em',
            margin: '0 auto',
            padding: '20px 0 0 0',
            width: ['fit-content', 'fit-content', 800],
          }}
        />
        <DynamicProfileSocialMediaLinks {...socialMediaLinks} />
      </Box>
      <S.ProfileSections>
        <S.ProfileSectionsContainer>
          <S.ProfileSectionRefContainer
            ref={(el) => {
              transactionRef.current[0] = el;
            }}
          >
            <DynamicDealInfo deal={deal} />
          </S.ProfileSectionRefContainer>
          <S.ProfileSectionRefContainer
            ref={(el) => {
              transactionRef.current[1] = el;
            }}
          >
            <DynamicProfileTransactions
              slug={deal.slug}
              comparables={comparables}
              extraTitleInfo={deal?.title ? `: ${deal?.title}` : ''}
            />
          </S.ProfileSectionRefContainer>
          {deal?.instagramId && (
            <S.ProfileSectionRefContainer
              ref={(el) => {
                transactionRef.current[2] = el;
              }}
            >
              <DynamicDealOnSocial deal={deal} />
            </S.ProfileSectionRefContainer>
          )}

          <S.ProfileSectionRefContainer
            ref={(el) => {
              if (!deal.instagramId) transactionRef.current[2] = el;
              else transactionRef.current[3] = el;
            }}
          >
            <DynamicProfileContact deal={deal} />
          </S.ProfileSectionRefContainer>
        </S.ProfileSectionsContainer>
        <DynamicProfileMenuNav
          scrollTo={scrollTo}
          noSummary
          link={`https://traded.co/property/${deal?.feeds?.[0]
            ?.toLocaleLowerCase()
            .replaceAll(' ', '-')}/${
            propertyStatus[deal?.transactionType as keyof typeof propertyStatus]
          }/${deal?.slug}/`}
          instagramId={deal?.instagramId as string}
        />
      </S.ProfileSections>
    </S.ProfilePage>
  );
};
