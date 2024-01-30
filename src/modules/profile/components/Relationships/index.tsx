/* eslint-disable no-nested-ternary */
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Box, IconButton, Pagination, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import type { Broker } from '@/__generated__/types.d';
import { RenderIf, Tag } from '@/modules/common/components';
import theme from '@/theme';
import { getRelationshipStats } from '@/utils/data/relationships';
import { getUrlForPage } from '@/utils/urlMapper';

import * as Nav from '../../../common/rankingsStyles/styles';
import { ProfileSectionContainer } from '../../styles';
import type { BrokerProfileSectionProps } from '../../types';
import { Bullets } from '../Bullets';
import { Divider } from '../Divider';
import { ProfileSectionTitle } from '../SectionTitle';
import { RelationshipCard } from './RelationshipCard';
import * as S from './styles';

const amountOfBrokersVisibleInitially = 11;

type TotalRelationships = {
  agents?: any;
  agencies?: any;
  lenders?: any;
};

export const ProfileRelationships: React.FC<BrokerProfileSectionProps> = ({
  broker,
}) => {
  const relationshipRef = useRef<null | HTMLDivElement>(null);
  const [chosenBroker, setChosenBroker] = useState<Broker | null>(null);
  const [isAllRelationships, setIsAllRelationships] = useState<boolean>(true);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(10);
  const [index, setIndex] = useState(0);
  const [totalRelationships, setTotalRelationships] =
    useState<TotalRelationships>();

  const [brokerRelationships, setBrokerRelationships] = useState(
    broker.relationships || []
  );
  const extraInfo = `: ${totalCount}`;

  useEffect(() => {
    fetch(`/api/brokerRelationships/${broker.slug}/`, {
      method: 'POST',
      body: JSON.stringify({
        page,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setBrokerRelationships(res.data.brokerRelationships.agents.nodes);
        if (index === 0) {
          setTotalCount(res.data.brokerRelationships.agents.totalCount);
        }
        setTotalRelationships(res.data.brokerRelationships);
      });
  }, [broker, page]);

  return (
    <RenderIf
      condition={
        totalRelationships?.agents?.totalCount !== 0 ||
        totalRelationships?.agencies?.totalCount !== 0 ||
        totalRelationships?.lenders?.totalCount !== 0
      }
    >
      <ProfileSectionContainer>
        <div ref={relationshipRef}></div>

        <ProfileSectionTitle
          sectionName="Relationships"
          extraInfo={extraInfo}
        />
        <Nav.ProfileMenuNavWrapper>
          <RenderIf condition={totalRelationships?.agents?.totalCount !== 0}>
            <Nav.ProfileMenuSectionLink
              isactive={index === 0}
              onClick={() => {
                setPage(1);
                setIndex(0);
                setTotalCount(totalRelationships?.agents?.totalCount);
              }}
            >
              <Typography variant="text" component="p">
                Agents
              </Typography>
            </Nav.ProfileMenuSectionLink>
          </RenderIf>
          <RenderIf condition={totalRelationships?.agencies?.totalCount !== 0}>
            <Nav.ProfileMenuSectionLink
              isactive={index === 1}
              onClick={() => {
                setPage(1);
                setIndex(1);
                setTotalCount(totalRelationships?.agencies?.totalCount);
              }}
              onChange={() =>
                setTotalCount(totalRelationships?.agencies?.totalCount)
              }
            >
              <Typography variant="text" component="p">
                Agencies
              </Typography>
            </Nav.ProfileMenuSectionLink>
          </RenderIf>
          <RenderIf condition={totalRelationships?.lenders?.totalCount !== 0}>
            <Nav.ProfileMenuSectionLink
              isactive={index === 2}
              onClick={() => {
                setPage(1);
                setIndex(2);
                setTotalCount(totalRelationships?.lenders?.totalCount);
              }}
            >
              <Typography variant="text" component="p">
                Lenders
              </Typography>
            </Nav.ProfileMenuSectionLink>
          </RenderIf>
        </Nav.ProfileMenuNavWrapper>
        {index === 0 && (
          <S.BrokerCardsContainer>
            {brokerRelationships
              .slice(0, amountOfBrokersVisibleInitially)
              .map((brokerRelated, i) => {
                return (
                  <RelationshipCard
                    key={brokerRelated.id + i}
                    broker={brokerRelated}
                    onclick={() => setChosenBroker(brokerRelated)}
                  />
                );
              })}
            <Box
              paddingTop="10px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              marginTop={3}
            >
              <IconButton
                disabled={page === 1}
                onClick={() => page >= 1 && setPage(page - 1)}
              >
                <NavigateBefore />
              </IconButton>
              <Pagination
                count={totalCount ? Math.ceil((totalCount as number) / 10) : 0}
                hidePrevButton
                hideNextButton
                siblingCount={2}
                page={page}
                onChange={(_, p) => setPage(p)}
              />
              <IconButton
                disabled={
                  page ===
                  (totalCount ? Math.ceil((totalCount as number) / 4) : 0)
                }
                onClick={() =>
                  page <= (Math.ceil(totalCount as number) || 0) &&
                  setPage(page + 1)
                }
              >
                <NavigateNext />
              </IconButton>
            </Box>
          </S.BrokerCardsContainer>
        )}
        {index === 1 && (
          <S.BrokerCardsContainer>
            {totalRelationships?.agencies?.nodes
              ?.slice(0, amountOfBrokersVisibleInitially)
              .map((agency: any, i: number) => {
                return (
                  <Link
                    key={i}
                    href={getUrlForPage('agency', agency?.slug)}
                    passHref
                  >
                    <Box
                      width={['100px', '150px', '150px']}
                      height={['100px', '150px', '150px']}
                      border={`1px solid ${theme.palette.secondary.dark}`}
                      sx={{ cursor: 'pointer' }}
                    >
                      <Image
                        alt={`${agency?.slug}'s profile picture`}
                        src={agency?.mainImage || 'assets/Dummy/150x150.png'}
                        width="100%"
                        height="100%"
                        layout="responsive"
                        loading="lazy"
                        objectFit="contain"
                        objectPosition="0% 100%"
                      />
                    </Box>
                  </Link>
                );
              })}
            <Box
              paddingTop="10px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              marginTop={3}
            >
              <IconButton
                disabled={page === 1}
                onClick={() => page >= 1 && setPage(page - 1)}
              >
                <NavigateBefore />
              </IconButton>
              <Pagination
                count={totalCount ? Math.ceil((totalCount as number) / 10) : 0}
                hidePrevButton
                hideNextButton
                siblingCount={2}
                page={page}
                onChange={(_, p) => setPage(p)}
              />
              <IconButton
                disabled={
                  page ===
                  (totalCount ? Math.ceil((totalCount as number) / 4) : 0)
                }
                onClick={() =>
                  page <= (Math.ceil(totalCount as number) || 0) &&
                  setPage(page + 1)
                }
              >
                <NavigateNext />
              </IconButton>
            </Box>
          </S.BrokerCardsContainer>
        )}
        {index === 2 && (
          <S.BrokerCardsContainer>
            {totalRelationships?.lenders?.nodes
              ?.slice(0, amountOfBrokersVisibleInitially)
              .map((lender: any, i: number) => {
                return (
                  <Link
                    key={i}
                    href={getUrlForPage('lender', lender?.slug)}
                    passHref
                  >
                    <Box
                      width={['100px', '150px', '150px']}
                      height={['100px', '150px', '150px']}
                      border={`1px solid ${theme.palette.secondary.dark}`}
                      sx={{ cursor: 'pointer' }}
                    >
                      <Image
                        alt={`${lender?.slug}'s profile picture`}
                        src={lender?.mainImage || '/assets/Dummy/150x150.png'}
                        width="100%"
                        height="100%"
                        layout="responsive"
                        loading="lazy"
                        objectFit="contain"
                        objectPosition="0% 100%"
                      />
                    </Box>
                  </Link>
                );
              })}
            <Box
              paddingTop="10px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              marginTop={3}
            >
              <IconButton
                disabled={page === 1}
                onClick={() => page >= 1 && setPage(page - 1)}
              >
                <NavigateBefore />
              </IconButton>
              <Pagination
                count={totalCount ? Math.ceil((totalCount as number) / 10) : 0}
                hidePrevButton
                hideNextButton
                siblingCount={2}
                page={page}
                onChange={(_, p) => setPage(p)}
              />
              <IconButton
                disabled={
                  page ===
                  (totalCount ? Math.ceil((totalCount as number) / 4) : 0)
                }
                onClick={() =>
                  page <= (Math.ceil(totalCount as number) || 0) &&
                  setPage(page + 1)
                }
              >
                <NavigateNext />
              </IconButton>
            </Box>
          </S.BrokerCardsContainer>
        )}
        <Divider color="#fff" />
        <Box>
          <Box display="flex">
            <Tag
              text="All Relationships"
              onClick={() => setIsAllRelationships(true)}
            />
            <RenderIf condition={broker?.company?.title}>
              <Tag
                text={broker?.company?.title as string}
                onClick={() => setIsAllRelationships(false)}
              />
            </RenderIf>
          </Box>
          {chosenBroker ? (
            <Box>
              <Typography marginY="5px" padding="8px" variant="h4">{`${
                isAllRelationships
                  ? broker?.name?.split(' ')[0]
                  : chosenBroker?.name
              } & ${
                isAllRelationships ? chosenBroker?.name : broker?.company?.title
              }`}</Typography>
              <Bullets
                stats={getRelationshipStats(chosenBroker, !isAllRelationships)}
              />
            </Box>
          ) : isAllRelationships ? (
            <Typography marginY="5px" padding="8px" fontWeight={500}>
              Click on a relationship to see their deal history together
            </Typography>
          ) : (
            <Box>
              <Typography marginY="5px" padding="8px" variant="h4">{`${
                broker?.name?.split(' ')[0]
              } & ${broker?.company?.title}`}</Typography>
              <Bullets stats={getRelationshipStats(broker, true)} />
            </Box>
          )}
        </Box>
      </ProfileSectionContainer>
    </RenderIf>
  );
};
