/* eslint-disable no-underscore-dangle */
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { profileSectionByIcon } from '@/constants/profile';
import { RenderIf } from '@/modules/common/components';
import { isImage } from '@/modules/common/components/MediaFrame';

import { ProfileSectionContainer } from '../../styles';
import type { ProfileSectionProps } from '../../types';
import { ContactForm } from './Form';
import * as S from './styles';

export const ProfileContact: React.FC<ProfileSectionProps> = ({
  broker,
  deal,
}) => {
  const [currentBroker, setCurrentBroker] = useState(broker);
  const brokers = deal?.profiles || [broker];

  useEffect(() => {
    let index = 0;
    if (brokers && brokers.length === 1) return setCurrentBroker(brokers[0]);
    const intervalId = setInterval(() => {
      index = (index + 1) % brokers.length; // loops back to 0 when it reaches the end
      setCurrentBroker(brokers[index]);
    }, 2000); // Change broker every 2 seconds. Adjust the time as needed.

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [brokers]);

  const name = currentBroker?.name || deal?.title || '';
  const image = currentBroker?.thumbnail || deal?.mainImage;

  let description = '';

  if (currentBroker?.__typename && currentBroker?.company) {
    description = `${currentBroker.__typename} at ${currentBroker.company.title}`;
  } else if (currentBroker?.__typename) {
    description = currentBroker.__typename;
  } else if (currentBroker?.company) {
    description = `At ${currentBroker.company}`;
  }

  return (
    <ProfileSectionContainer
      id="profile-contact"
      aria-label={`Get in touch with ${name}`}
    >
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box
          component="figure"
          height={['40px', '40px', '60px']}
          width={['40px', '40px', '60px']}
        >
          <Image
            src={profileSectionByIcon.Contact}
            alt=""
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            loading="lazy"
          />
        </Box>
        <Typography variant="h2" component="h3">
          Contact
        </Typography>
      </Box>

      <S.ContactContent>
        <S.BrokerCard>
          <RenderIf condition={image && isImage(image)}>
            <Image
              alt="Broker's profile image"
              src={image as string}
              width="100%"
              height="100%"
              objectFit="contain"
              objectPosition="top"
              layout="responsive"
              loading="lazy"
            />
          </RenderIf>
          <S.BrokerCardInfo>
            <Typography variant="h4" component="h2">
              {name}
            </Typography>
            <RenderIf condition={description}>
              <Typography
                variant="bodyLarge"
                component="p"
                sx={{ color: '#d4d7e2' }}
                mt={1}
              >
                {description}
              </Typography>
            </RenderIf>
          </S.BrokerCardInfo>
        </S.BrokerCard>
        <ContactForm
          contactPhone={broker?.phone}
          contactBroker={broker}
          deal={deal}
        />
      </S.ContactContent>
    </ProfileSectionContainer>
  );
};
