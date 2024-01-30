import {
  FacebookRounded,
  Instagram,
  LanguageRounded,
  LinkedIn,
  Pinterest,
  PlayArrow,
  Twitter,
} from '@mui/icons-material';
import type { SxProps } from '@mui/material';
import { Box, Button } from '@mui/material';

import type { Broker } from '@/__generated__/types.d';
import { RenderIf } from '@/modules/common/components';
import { getUrlForPage } from '@/utils/urlMapper';

import { SocialMediaLink } from '../SocialMediaLinks/SocialMediaLink';

export const SocialSection: React.FC<{
  broker: Broker;
  sx?: SxProps;
  isGrid?: boolean;
}> = ({ broker, sx, isGrid = false }) => {
  return (
    <Box sx={sx}>
      <Box display={isGrid ? 'none' : 'block'}>
        <Button
          variant="white-button-black-text-hover-alter"
          sx={{ border: '1px solid black', marginBottom: '5px' }}
        >
          <Box
            component="a"
            href={getUrlForPage('agent', broker?.slug)}
            sx={{ color: '#000', textDecoration: 'none' }}
          >
            View Profile
          </Box>
        </Button>
      </Box>

      <Box position={isGrid ? 'relative' : 'absolute'} bottom="1px">
        <Box
          component="ul"
          sx={{ padding: 0, listStyle: 'none', margin: 0 }}
          display="flex"
          flexWrap="wrap"
        >
          <RenderIf condition={broker?.linkedinHandle}>
            <Box component="li" width={45} height={45} display="flex">
              <SocialMediaLink
                href={broker?.linkedinHandle}
                aria-label={`${broker?.name}'s LinkedIn profile`}
              >
                <LinkedIn />
              </SocialMediaLink>
            </Box>
          </RenderIf>

          <RenderIf condition={broker?.pinterestHandle}>
            <Box component="li" width={45} height={45} display="flex">
              <SocialMediaLink
                href={broker?.pinterestHandle}
                aria-label={`${broker?.name}'s Pinterest profile`}
              >
                <Pinterest />
              </SocialMediaLink>
            </Box>
          </RenderIf>

          <RenderIf condition={broker?.facebookHandle}>
            <Box component="li" width={45} height={45} display="flex">
              <SocialMediaLink
                href={broker?.facebookHandle}
                aria-label={`${broker?.name}'s Facebook profile`}
              >
                <FacebookRounded />
              </SocialMediaLink>
            </Box>
          </RenderIf>

          <RenderIf condition={broker?.websiteUrl}>
            <Box component="li" width={45} height={45} display="flex">
              <SocialMediaLink
                href={broker?.websiteUrl}
                aria-label={`${broker?.name}'s Website`}
              >
                <LanguageRounded />
              </SocialMediaLink>
            </Box>
          </RenderIf>

          <RenderIf condition={broker?.instagramHandle}>
            <Box component="li" width={45} height={45} display="flex">
              <SocialMediaLink
                href={broker?.instagramHandle}
                aria-label={`${broker?.name}'s Instagram`}
              >
                <Instagram />
              </SocialMediaLink>
            </Box>
          </RenderIf>

          <RenderIf condition={broker?.twitterHandle}>
            <Box component="li" width={45} height={45} display="flex">
              <SocialMediaLink
                href={broker?.twitterHandle}
                aria-label={`${broker?.name}'s Twitter`}
              >
                <Twitter />
              </SocialMediaLink>
            </Box>
          </RenderIf>

          <RenderIf condition={broker?.youtubeHandle}>
            <Box component="li" width={45} height={45} display="flex">
              <SocialMediaLink
                href={broker?.youtubeHandle}
                aria-label={`${broker?.name}'s Youtube profile`}
              >
                <PlayArrow />
              </SocialMediaLink>
            </Box>
          </RenderIf>
        </Box>
      </Box>
    </Box>
  );
};
