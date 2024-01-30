import 'mapbox-gl/dist/mapbox-gl.css';

import { Box, Typography } from '@mui/material';
import {
  GoogleMap,
  StreetViewPanorama,
  useJsApiLoader,
} from '@react-google-maps/api';
import type { Map } from 'mapbox-gl';
import mapboxgl from 'mapbox-gl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import type { Deal } from '@/__generated__/types.d';
import { RenderIf } from '@/modules/common/components';
import { getDealStats } from '@/utils/data/dealStats';

import { ProfileSectionContainer } from '../../styles';
import type { ProfileSectionProps } from '../../types';
import * as S from './styles';

export const DealInfo: React.FC<ProfileSectionProps> = ({ deal }) => {
  const stats = getDealStats(deal as Deal);
  const agents = deal?.profiles;
  const agencies = deal?.companies;
  const lenders = deal?.lenders;

  const latitude = deal?.properties ? deal?.properties[0]?.latitude : null;
  const longitude = deal?.properties ? deal?.properties[0]?.longitude : null;

  // const latitude = 40.67690538477808;
  // const longitude = -73.9370290343979;

  const center = { lat: latitude as number, lng: longitude as number };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const { NEXT_PUBLIC_MAPBOX_API_TOKEN } = process.env;

  const mapContainerRef = useRef<HTMLElement | string>('');

  mapboxgl.accessToken = NEXT_PUBLIC_MAPBOX_API_TOKEN as string;

  useEffect(() => {
    if (mapContainerRef && mapContainerRef.current) {
      const map: Map = new mapboxgl.Map({
        container: mapContainerRef && mapContainerRef?.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center,
        zoom: 12,
      });

      new mapboxgl.Marker({ color: 'black' }).setLngLat(center).addTo(map);
    }
  }, []);
  return (
    <ProfileSectionContainer id="deal-info">
      {/* Render Deal Stats */}
      <S.DealInfoContainer>
        <RenderIf condition={latitude && longitude}>
          <Box
            display="flex"
            height={[400, 200]}
            flexDirection={['column', 'row']}
          >
            <Box display="flex" flex="0 0 50%" ref={mapContainerRef} />
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{
                  height: 'inherit',
                  flex: '0 0 50%',
                  display: 'flex',
                  justifyContent: 'end',
                }}
                center={center}
                zoom={18}
                options={{ streetViewControl: false }}
                // onLoad={onLoad}
              >
                {/* {center?.lat && center?.lng && (
                <Marker position={{ lat: center.lat, lng: center.lng }} />
              )} */}
                <StreetViewPanorama
                  options={{
                    visible: true,
                    position: center,
                    panControl: false,
                    zoomControl: false,
                  }}
                />
              </GoogleMap>
            ) : null}
          </Box>
        </RenderIf>
        <Box padding="20px 30px">
          <S.DealInfoStats>
            {Object.entries(stats).map(([title, value]) => (
              <RenderIf condition={value.value} key={title}>
                <S.DealInfoStat>
                  <S.DealInfoStatTitle>
                    <Typography
                      variant="bodyExtraLarge"
                      component="span"
                      fontSize={[16, 20, 20, 24]}
                      fontWeight={500}
                    >
                      {title === 'Sold Value' &&
                      deal?.transactionType?.toLowerCase() === 'lease'
                        ? 'Leased Value'
                        : title}
                    </Typography>
                  </S.DealInfoStatTitle>
                  <S.DealInfoStatValue>
                    <Image
                      src={value.image}
                      alt={value.value}
                      width={24}
                      height={24}
                    />

                    <RenderIf condition={title === 'Asset Type' && value.value}>
                      <Link
                        href={`/property-type/${(value.value || '')
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                      >
                        <Typography
                          component="span"
                          variant="bodyExtraLarge"
                          fontSize={[16, 20, 20, 24]}
                          fontWeight={500}
                          marginLeft={1}
                          sx={{
                            maxWidth: '100%', // Set a maxWidth to prevent the text from overflowing the parent
                            overflow: 'hidden', // Hide the overflow
                            textOverflow: 'ellipsis', // Add ellipsis for overflowing text
                            whiteSpace: 'nowrap', // Prevent wrapping to the next line
                            cursor: 'pointer',
                          }}
                        >
                          {value.value}
                        </Typography>
                      </Link>
                    </RenderIf>
                    <RenderIf condition={title !== 'Asset Type'}>
                      <Typography
                        component="span"
                        variant="bodyExtraLarge"
                        fontSize={[16, 20, 20, 24]}
                        fontWeight={500}
                        marginLeft={1}
                        sx={{
                          maxWidth: '100%', // Set a maxWidth to prevent the text from overflowing the parent
                          overflow: 'hidden', // Hide the overflow
                          textOverflow: 'ellipsis', // Add ellipsis for overflowing text
                          whiteSpace: 'nowrap', // Prevent wrapping to the next line
                        }}
                      >
                        {value.value}
                      </Typography>
                    </RenderIf>
                  </S.DealInfoStatValue>
                  <RenderIf
                    condition={
                      value.value2 && deal?.transactionType !== 'Lease'
                    }
                  >
                    <S.DealInfoStatValue>
                      <Image
                        src={value.image}
                        alt={value.value2}
                        width={24}
                        height={24}
                      />
                      <Typography
                        component="span"
                        variant="bodyExtraLarge"
                        fontSize={[16, 20, 20, 24]}
                        fontWeight={500}
                        marginLeft={1}
                      >
                        {value.value2}
                      </Typography>
                    </S.DealInfoStatValue>
                  </RenderIf>
                </S.DealInfoStat>
              </RenderIf>
            ))}
          </S.DealInfoStats>

          <RenderIf
            condition={
              agents && agents?.length > 0 && agents?.some((agent) => !!agent)
            }
          >
            <Typography variant="h3" component="h3" marginLeft={1}>
              {agents && agents?.length > 1 ? 'Agents' : 'Agent'}
            </Typography>
          </RenderIf>
          <S.DealProfilesContainer>
            {agents?.map((agent) => (
              <RenderIf condition={!!agent} key={agent?.name}>
                <S.DealProfileWrapper>
                  <Link href={`/agent/${agent?.slug}` as string} passHref>
                    <a>
                      <Image
                        src={agent?.thumbnail || '/assets/Dummy/120x120.png'}
                        alt={agent?.name}
                        width={120}
                        height={120}
                      />
                    </a>
                  </Link>
                  <S.DealProfileStatsWrapper>
                    <Link href={`/agent/${agent?.slug}` as string} passHref>
                      <a>
                        <Typography variant="bodyLarge" component="h3">
                          {agent?.name}
                        </Typography>
                      </a>
                    </Link>
                    <S.DealProfileStat>
                      <RenderIf condition={agent?.company?.slug as string}>
                        <Link
                          href={`/${agent?.company?.type?.toLowerCase()}/${
                            agent?.company?.slug as string
                          }`}
                          passHref
                        >
                          <a>
                            <Typography
                              fontSize={14}
                              component="span"
                              fontWeight={300}
                            >
                              {agent?.company?.title}
                            </Typography>
                          </a>
                        </Link>
                      </RenderIf>
                    </S.DealProfileStat>
                    <S.DealProfileStat>
                      <Typography
                        fontSize={14}
                        marginRight={2}
                        component="span"
                      >
                        Deals
                      </Typography>
                      <Typography fontSize={14} component="span">
                        {agent?.dealsCount}
                      </Typography>
                    </S.DealProfileStat>
                    <S.DealProfileStat>
                      {agent.totalFinanced !== '0' ||
                      agent.totalSold !== '0' ? (
                        <Typography
                          fontSize={14}
                          component="span"
                          marginRight={2}
                        >
                          {parseInt(agent?.totalSold, 10) >
                          parseInt(agent.totalFinanced, 10)
                            ? 'Sold'
                            : 'Financed'}
                        </Typography>
                      ) : (
                        <Typography
                          fontSize={14}
                          component="span"
                          marginRight={2}
                        >
                          Leased
                        </Typography>
                      )}
                      {agent.totalFinanced !== '0' ||
                      agent.totalSold !== '0' ? (
                        <Typography fontSize={14} component="span">
                          {`$ ${
                            parseInt(agent?.totalSold, 10) >
                            parseInt(agent.totalFinanced, 10)
                              ? parseInt(agent?.totalSold, 10).toLocaleString()
                              : parseInt(
                                  agent?.totalFinanced,
                                  10
                                ).toLocaleString()
                          }`}
                        </Typography>
                      ) : (
                        <Typography fontSize={14} component="span">
                          {`${agent.totalLeaseDeals}`}
                        </Typography>
                      )}
                    </S.DealProfileStat>
                  </S.DealProfileStatsWrapper>
                </S.DealProfileWrapper>
              </RenderIf>
            ))}
          </S.DealProfilesContainer>
          <RenderIf
            condition={
              agencies &&
              agencies?.length > 0 &&
              agencies?.some((agency) => !!agency)
            }
          >
            <Typography variant="h3" component="h3" marginLeft={1}>
              {agencies && agencies?.length > 1 ? 'Agencies' : 'Agency'}
            </Typography>
          </RenderIf>
          <S.DealProfilesContainer>
            {agencies?.map((agency) => (
              <RenderIf condition={!!agency} key={agency?.title}>
                <S.DealProfileWrapper>
                  <Link href={`/agency/${agency?.slug}` as string} passHref>
                    <a>
                      <Image
                        src={agency?.mainImage || '/assets/Dummy/120x120.png'}
                        alt={agency?.title as string}
                        width={120}
                        height={120}
                      />
                    </a>
                  </Link>
                  <S.DealProfileStatsWrapper>
                    <Link href={`/agency/${agency?.slug}` as string} passHref>
                      <a>
                        <Typography variant="bodyLarge" component="h3">
                          {agency?.title}
                        </Typography>
                      </a>
                    </Link>
                    <Typography fontSize={14} marginRight={2} component="span">
                      Agency
                    </Typography>
                    <S.DealProfileStat>
                      <Typography
                        fontSize={14}
                        marginRight={2}
                        component="span"
                      >
                        Deals
                      </Typography>
                      <Typography fontSize={14} component="span">
                        {agency?.dealsCount}
                      </Typography>
                    </S.DealProfileStat>
                    <S.DealProfileStat>
                      <Typography
                        fontSize={14}
                        marginRight={2}
                        component="span"
                      >
                        Volume
                      </Typography>
                      <Typography fontSize={14} component="span">
                        {`$ ${
                          agency?.totalVolume
                            ? parseInt(agency?.totalVolume, 10).toLocaleString()
                            : ''
                        }`}
                      </Typography>
                    </S.DealProfileStat>
                  </S.DealProfileStatsWrapper>
                </S.DealProfileWrapper>
              </RenderIf>
            ))}
          </S.DealProfilesContainer>

          <S.DealProfilesContainer>
            {lenders?.map((lender) => (
              <RenderIf condition={!!lender} key={lender?.title}>
                <S.DealProfileWrapper>
                  <Link href={`/lender/${lender?.slug}` as string} passHref>
                    <a>
                      <Image
                        src={lender?.mainImage || '/assets/Dummy/120x120.png'}
                        alt={lender?.title as string}
                        width={120}
                        height={120}
                      />
                    </a>
                  </Link>
                  <S.DealProfileStatsWrapper>
                    <Link href={`/lender/${lender?.slug}` as string} passHref>
                      <a>
                        <Typography variant="bodyLarge" component="h3">
                          {lender?.title}
                        </Typography>
                      </a>
                    </Link>
                    <Typography fontSize={14} marginRight={2} component="span">
                      Lender
                    </Typography>
                    <S.DealProfileStat>
                      <Typography
                        fontSize={14}
                        marginRight={2}
                        component="span"
                      >
                        Deals
                      </Typography>
                      <Typography fontSize={14} component="span">
                        {lender?.dealsCount}
                      </Typography>
                    </S.DealProfileStat>
                    <S.DealProfileStat>
                      <Typography
                        fontSize={14}
                        marginRight={2}
                        component="span"
                      >
                        Volume
                      </Typography>
                      <Typography fontSize={14} component="span">
                        {`$ ${
                          lender?.totalVolume
                            ? parseInt(lender?.totalVolume, 10).toLocaleString()
                            : ''
                        }`}
                      </Typography>
                    </S.DealProfileStat>
                  </S.DealProfileStatsWrapper>
                </S.DealProfileWrapper>
              </RenderIf>
            ))}
          </S.DealProfilesContainer>
        </Box>
      </S.DealInfoContainer>
    </ProfileSectionContainer>
  );
};
