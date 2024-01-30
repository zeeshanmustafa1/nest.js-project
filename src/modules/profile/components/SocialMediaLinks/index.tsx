import {
  FacebookRounded,
  Instagram,
  LanguageRounded,
  LinkedIn,
  Pinterest,
  PlayArrow,
  Twitter,
} from '@mui/icons-material';

import type { ProfileSectionProps } from '../../types';
import { SocialMediaLink } from './SocialMediaLink';
import * as S from './styles';

export const ProfileSocialMediaLinks: React.FC<ProfileSectionProps> = ({
  broker,
  agency,
  instagram,
  facebook,
  twitter,
}) => {
  const data = {
    title: broker?.name || agency?.title,
    linkedinUrl: broker?.linkedinHandle || agency?.linkedinUrl,
    facebookUrl: broker?.facebookHandle || agency?.facebookUrl || facebook,
    websiteUrl: broker?.websiteUrl || agency?.websiteUrl,
    youtubeUrl: broker?.youtubeHandle || agency?.youtubeUrl,
    twitterUrl: agency?.twitterUrl || twitter,
    instagramUrl: broker?.instagramHandle || agency?.instagramUrl || instagram,
    pinterestUrl: broker?.pinterestHandle,
  };

  return (
    <>
      <S.SocialMediaLinksContainer
        aria-label={`Follow ${data?.title} on socials`}
      >
        <SocialMediaLink
          href={data?.linkedinUrl}
          aria-label={`${data?.title}'s LinkedIn profile`}
        >
          <LinkedIn />
        </SocialMediaLink>
        <SocialMediaLink
          href={data?.pinterestUrl}
          aria-label={`${data?.title}'s Pinterest profile`}
        >
          <Pinterest />
        </SocialMediaLink>
        <SocialMediaLink
          href={data?.facebookUrl}
          aria-label={`${data?.title}'s Facebook profile`}
        >
          <FacebookRounded />
        </SocialMediaLink>
        <SocialMediaLink
          href={data?.websiteUrl}
          aria-label={`${data?.title}'s Website`}
        >
          <LanguageRounded />
        </SocialMediaLink>
        <SocialMediaLink
          href={data?.instagramUrl}
          aria-label={`${data?.title}'s Instagram`}
        >
          <Instagram />
        </SocialMediaLink>
        <SocialMediaLink
          href={data?.twitterUrl}
          aria-label={`${data?.title}'s Twitter`}
        >
          <Twitter />
        </SocialMediaLink>
        <SocialMediaLink
          href={data?.youtubeUrl}
          aria-label={`${data?.title}'s Youtube profile`}
        >
          <PlayArrow />
        </SocialMediaLink>
      </S.SocialMediaLinksContainer>
    </>
  );
};
