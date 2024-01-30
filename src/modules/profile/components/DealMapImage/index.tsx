import { Typography } from '@mui/material';
import Image from 'next/image';
import Slider from 'react-slick';

import type { Broker, Maybe } from '@/__generated__/types.d';
import { Map, RenderIf } from '@/modules/common/components';

import {
  AbsoluteContainer,
  ContentBrokersContainer,
  ContentContainer,
  LogoContainer,
  LogoContentBrokersContainer,
  MapAndContentWrapper,
} from './styles';

interface IBrokerOnMap {
  latitude: Maybe<number> | undefined;
  longitude: Maybe<number> | undefined;
  salePrice: string | number;
  brokers: Maybe<Broker[]> | undefined;
}

export const DealMapImage: React.FC<IBrokerOnMap> = ({
  latitude,
  longitude,
  brokers,
  salePrice,
}) => {
  return (
    <>
      {latitude && longitude && (
        <MapAndContentWrapper maxWidth={['100%', '50%', '35%', '400px']}>
          <AbsoluteContainer>
            <Map
              center={{ lat: latitude as number, lng: longitude as number }}
              containerStyle={{ width: '100%', height: 'inherit' }}
              googleMapOptions={{
                keyboardShortcuts: false,
                mapTypeControl: false,
                mapTypeId: 'hybrid',
                zoomControl: false,
                panControl: false,
                fullscreenControl: false,
                rotateControl: false,
                streetViewControl: false,
                scaleControl: false,
              }}
            />
          </AbsoluteContainer>
          <AbsoluteContainer>
            <LogoContentBrokersContainer>
              <LogoContainer>
                <Image
                  src="/assets/Traded.png"
                  width={100}
                  height={30}
                  alt="Traded Logo"
                />
              </LogoContainer>

              <ContentBrokersContainer>
                <RenderIf condition={!!brokers}>
                  <Slider
                    slidesToShow={3.5}
                    slidesToScroll={3}
                    infinite={false}
                    arrows={false}
                    dots={false}
                  >
                    {brokers?.map((broker) => (
                      <RenderIf
                        condition={broker?.thumbnail as string}
                        key={broker?.id}
                      >
                        <Image
                          src={broker?.thumbnail as string}
                          width={65}
                          height={65}
                          style={{ borderRadius: '50%' }}
                          alt={broker?.name}
                        />
                      </RenderIf>
                    ))}
                  </Slider>
                </RenderIf>
                <ContentContainer>
                  <Typography
                    fontSize={45}
                    textAlign="center"
                    fontWeight={700}
                    overflow="hidden"
                    textOverflow="ellipsis"
                  >
                    {`$${
                      salePrice
                        ? (typeof salePrice === 'string'
                            ? parseInt(salePrice, 10)
                            : salePrice
                          ).toLocaleString()
                        : '0'
                    }`}
                  </Typography>
                </ContentContainer>
              </ContentBrokersContainer>
            </LogoContentBrokersContainer>
          </AbsoluteContainer>
        </MapAndContentWrapper>
      )}
    </>
  );
};
