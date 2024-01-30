import {
  FacebookRounded,
  Instagram,
  LanguageRounded,
  LinkedIn,
  Pinterest,
  PlayArrow,
  Twitter,
} from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

import type { Broker } from '@/__generated__/types.d';
import { RenderIf } from '@/modules/common/components';
import { SocialMediaLink } from '@/modules/profile/components/SocialMediaLinks/SocialMediaLink';
import theme from '@/theme';
import { getUrlForPage } from '@/utils/urlMapper';

export const AgentCard: React.FC<{ broker: Broker }> = ({ broker }) => {
  return (
    <Box
      padding="30px"
      marginBottom="20px"
      sx={{ background: '#fff' }}
      borderRadius="4px"
    >
      <Box display="flex" flexDirection={['column', 'row', 'row']}>
        <Box
          mr={['0px', '30px', '30px']}
          mb={['20px', '0px', '0px']}
          display="flex"
          justifyContent="center"
        >
          <Link href={getUrlForPage('agent', broker?.slug)} passHref>
            <a>
              <Image
                src={broker?.thumbnail || '/assets/Dummy/240x240.png'}
                alt={`${broker?.name}-image`}
                width={240}
                height={240}
              />
            </a>
          </Link>
        </Box>

        <Box flexGrow={1}>
          <Box>
            <Box display="flex">
              <Link href={getUrlForPage('agent', broker?.slug)} passHref>
                <Typography
                  component="a"
                  variant="bodyLarge"
                  color={theme?.palette?.black?.main}
                  sx={{ textDecoration: 'none' }}
                >
                  {broker?.name}
                </Typography>
              </Link>
              <Box ml={2}>
                <Box
                  component="ul"
                  sx={{ padding: 0, listStyle: 'none', margin: 0 }}
                  display="flex"
                  flexWrap="wrap"
                >
                  <RenderIf condition={broker?.websiteUrl}>
                    <Box component="li" width={30} display="flex">
                      <SocialMediaLink
                        href={broker?.websiteUrl}
                        aria-label={`${broker?.name}'s Website`}
                      >
                        <LanguageRounded />
                      </SocialMediaLink>
                    </Box>
                  </RenderIf>

                  <RenderIf condition={broker?.linkedinHandle}>
                    <Box component="li" width={30} display="flex">
                      <SocialMediaLink
                        href={broker?.linkedinHandle}
                        aria-label={`${broker?.name}'s LinkedIn profile`}
                      >
                        <LinkedIn />
                      </SocialMediaLink>
                    </Box>
                  </RenderIf>

                  <RenderIf condition={broker?.instagramHandle}>
                    <Box component="li" width={30} display="flex">
                      <SocialMediaLink
                        href={broker?.instagramHandle}
                        aria-label={`${broker?.name}'s Instagram`}
                      >
                        <Instagram />
                      </SocialMediaLink>
                    </Box>
                  </RenderIf>

                  <RenderIf condition={broker?.facebookHandle}>
                    <Box component="li" width={30} display="flex">
                      <SocialMediaLink
                        href={broker?.facebookHandle}
                        aria-label={`${broker?.name}'s Facebook profile`}
                      >
                        <FacebookRounded />
                      </SocialMediaLink>
                    </Box>
                  </RenderIf>

                  <RenderIf condition={broker?.twitterHandle}>
                    <Box component="li" width={30} display="flex">
                      <SocialMediaLink
                        href={broker?.twitterHandle}
                        aria-label={`${broker?.name}'s Twitter`}
                      >
                        <Twitter />
                      </SocialMediaLink>
                    </Box>
                  </RenderIf>

                  <RenderIf condition={broker?.youtubeHandle}>
                    <Box component="li" width={30} display="flex">
                      <SocialMediaLink
                        href={broker?.youtubeHandle}
                        aria-label={`${broker?.name}'s Youtube profile`}
                      >
                        <PlayArrow />
                      </SocialMediaLink>
                    </Box>
                  </RenderIf>

                  <RenderIf condition={broker?.pinterestHandle}>
                    <Box component="li" width={30} display="flex">
                      <SocialMediaLink
                        href={broker?.pinterestHandle}
                        aria-label={`${broker?.name}'s Pinterest profile`}
                      >
                        <Pinterest />
                      </SocialMediaLink>
                    </Box>
                  </RenderIf>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography color="#636363" mb="1rem" variant="body">
                {broker?.title ? `${broker?.title} at ` : ``}
                <Link
                  href={getUrlForPage('agency', broker?.company?.slug)}
                  passHref
                >
                  <Typography
                    component="a"
                    sx={{ textDecoration: 'none' }}
                    color="#005a87"
                    mb="1rem"
                  >
                    {broker?.company?.title}
                  </Typography>
                </Link>
              </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            m="25px 0px"
            flexDirection={['column', 'column', 'row']}
          >
            <Box width={['100%', '100%', '50%']}>
              <Box component="ul" m="0" p="0" sx={{ listStyle: 'none' }}>
                <Box
                  component="li"
                  borderBottom="1px solid #dce0e0"
                  sx={{ clear: 'both' }}
                  mb={1}
                >
                  <Typography
                    display="inline-block"
                    fontWeight={600}
                    fontSize={15}
                  >
                    Office
                  </Typography>
                  <Link href={`tel:${broker?.phone || '123456789'}`} passHref>
                    <Typography
                      component="a"
                      variant="body"
                      color="#636363"
                      sx={{
                        float: 'right',
                        textDecoration: 'none',
                      }}
                    >
                      {broker?.phone || '123456789'}
                    </Typography>
                  </Link>
                </Box>

                <Box
                  component="li"
                  borderBottom="1px solid #dce0e0"
                  sx={{ clear: 'both' }}
                  mb={1}
                  fontSize="15px"
                >
                  <Typography
                    display="inline-block"
                    fontWeight={600}
                    fontSize={15}
                  >
                    Mobile
                  </Typography>
                  <Link href={`tel:${broker?.phone || '123456789'}`} passHref>
                    <Typography
                      component="a"
                      variant="body"
                      color="#636363"
                      sx={{
                        float: 'right',
                        textDecoration: 'none',
                      }}
                    >
                      {broker?.phone || '123456789'}
                    </Typography>
                  </Link>
                </Box>

                <Box
                  component="li"
                  borderBottom="1px solid #dce0e0"
                  sx={{ clear: 'both' }}
                  mb={1}
                  fontSize="15px"
                >
                  <Typography
                    display="inline-block"
                    fontWeight={600}
                    fontSize={15}
                  >
                    Email
                  </Typography>
                  <Link
                    href={`mailto:${broker?.email || 'abc@abc.com'}`}
                    passHref
                  >
                    <Typography
                      component="a"
                      variant="body"
                      color="#636363"
                      sx={{
                        float: 'right',
                        textDecoration: 'none',
                      }}
                    >
                      {broker?.email || 'abc@abc.com'}
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Box>

            <Box width={['100%', '100%', '45%']}>
              <Box component="ul" m="0" p="0" sx={{ listStyle: 'none' }}>
                <Box
                  component="li"
                  borderBottom="1px solid #dce0e0"
                  sx={{ clear: 'both' }}
                  mb={1}
                >
                  <Typography
                    display="inline-block"
                    fontWeight={600}
                    fontSize={15}
                  >
                    Closed Deals
                  </Typography>
                  <Typography
                    variant="body"
                    color="#636363"
                    sx={{
                      float: 'right',
                      textDecoration: 'none',
                    }}
                  >
                    {broker?.dealsCount || '0'}
                  </Typography>
                </Box>

                <Box
                  component="li"
                  borderBottom="1px solid #dce0e0"
                  sx={{ clear: 'both' }}
                  mb={1}
                >
                  <Typography
                    display="inline-block"
                    fontWeight={600}
                    fontSize={15}
                  >
                    Square Feet
                  </Typography>
                  <Typography
                    variant="body"
                    color="#636363"
                    sx={{
                      float: 'right',
                      textDecoration: 'none',
                    }}
                  >
                    {`${
                      broker?.totalSquareFootage
                        ? broker?.totalSquareFootage
                        : 0
                    } SqFt`}
                  </Typography>
                </Box>

                <Box
                  component="li"
                  borderBottom="1px solid #dce0e0"
                  sx={{ clear: 'both' }}
                  mb={1}
                >
                  <Typography
                    display="inline-block"
                    fontWeight={600}
                    fontSize={15}
                  >
                    Last Deal Closed
                  </Typography>
                  <Typography
                    variant="body"
                    color="#636363"
                    sx={{
                      float: 'right',
                      textDecoration: 'none',
                    }}
                  >
                    {moment(broker?.lastDeal?.closingDate).format(
                      'MMM DD, YYYY'
                    )}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mt={2}>
            <Link href={getUrlForPage('agent', broker?.slug)} passHref>
              <Button
                sx={{
                  background: '#005A87',
                  borderColor: '#005A87',
                  borderRadius: 1,
                  width: ['100%', '100%', '40%'],
                  float: 'right',

                  '&:hover': {
                    background: '#3ec0ef',
                    borderColor: '#3ec0ef',
                  },
                }}
              >
                View Profile
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
