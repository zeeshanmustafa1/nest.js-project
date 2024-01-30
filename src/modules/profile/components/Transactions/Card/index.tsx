/* eslint-disable no-nested-ternary */
import { Skeleton, Typography } from '@mui/material';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import type { Broker } from '@/__generated__/types.d';
import { BrokerAvatarLink, RenderIf } from '@/modules/common/components';
import { getUrlForPage } from '@/utils/urlMapper';

import type { TransactionCardProps } from '../types';
import * as S from './styles';

export const TransactionCard: React.FC<TransactionCardProps> = ({
  deal,
  loading,
}) => {
  const {
    slug,
    feeds,
    mainImage: imageUrl,
    transactionType,
    pricePerSquareFoot,
    salePrice,
    loanAmount,
    closingDate: dealDate,
    address,
    assetType: asset,
    profiles: agents,
  } = deal;

  // const price = transactionType?.toLowerCase().includes('loan')
  //   ? loanAmount
  //     ? `$${loanAmount.toLocaleString()}`
  //     : 'Not Available'
  //   : salePrice
  //   ? `$${parseInt(salePrice, 10).toLocaleString()}`
  //   : 'Not Available';
  let price: string | undefined = 'Not Available';
  const amount = loanAmount || salePrice;
  const addressCheck = address || 'Not Available';

  const ref = useRef<any>(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const elispsedAddress =
    addressCheck?.length > 30
      ? `${addressCheck?.substring(0, 30)}...`
      : addressCheck;
  if (amount) {
    if (transactionType?.toLowerCase() === 'loan') {
      price = `$${parseInt(amount, 10).toLocaleString('en-US')}`;
    } else {
      price = `$${parseInt(amount, 10).toLocaleString('en-US')}`;
    }
  }

  if (price === null || price === '$0' || price === 'Not Available') {
    price = transactionType?.toUpperCase();
  }

  useEffect(() => {
    setHeight(ref.current?.clientHeight);
    setWidth(ref.current?.clientWidth);
  }, []);

  const images = ['jpeg', 'jpg', 'gif', 'png'];
  const videos = ['mp4', '3gp', 'ogg'];

  return (
    <S.TransactionCardWrapper>
      <S.TransactionImageWrapper ref={ref}>
        {loading ? (
          <Skeleton
            variant="rectangular"
            height={height}
            width={width}
            animation="wave"
          />
        ) : (
          <RenderIf condition={imageUrl as string}>
            <Link
              href={getUrlForPage(
                'transaction',
                slug,
                feeds && feeds[0],
                transactionType
              )}
              passHref
            >
              <a>
                <RenderIf
                  condition={images?.some((el) =>
                    (imageUrl as string)?.includes(el)
                  )}
                >
                  <Image
                    src={imageUrl as string}
                    alt="Transaction image"
                    width="100%"
                    height="100%"
                    layout="responsive"
                  />
                </RenderIf>
                <RenderIf
                  condition={videos?.some((el) =>
                    (imageUrl as string)?.includes(el)
                  )}
                >
                  <video
                    src={imageUrl as string}
                    width="100%"
                    height="100%"
                    style={{ maxHeight: '400px' }}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    controls={false}
                  />
                </RenderIf>
              </a>
            </Link>
          </RenderIf>
        )}
      </S.TransactionImageWrapper>
      <S.TransactionContent>
        <S.TransactionInfoList>
          {loading ? (
            <Skeleton
              variant="text"
              sx={{ fontSize: '1rem' }}
              animation="wave"
            />
          ) : (
            <Typography
              variant="h4"
              component="h5"
              display="flex"
              fontWeight={900}
              fontSize={32}
            >
              {/* <Image
                src="/assets/Icon/Colored/Location.svg"
                width={20}
                height={20}
                alt="Location Icon"
              /> */}
              {deal.transactionType === 'Lease'
                ? deal?.pricePerSquareFoot
                  ? `$${deal.pricePerSquareFoot}/ft.`
                  : 'LEASE'
                : price}
            </Typography>
          )}
          <S.TransactionInfo>
            <Typography variant="text" component="span">
              Status
            </Typography>
            {loading ? (
              <Skeleton
                variant="text"
                sx={{ fontSize: '1rem' }}
                width={150}
                animation="wave"
              />
            ) : (
              <Typography variant="body" component="span">
                {`${transactionType?.toUpperCase()}
              ${
                !transactionType?.toLowerCase().includes('lease') &&
                pricePerSquareFoot
                  ? `, $${pricePerSquareFoot} PPSF`
                  : ''
              }`}
              </Typography>
            )}
          </S.TransactionInfo>
          <S.TransactionInfo>
            <Typography variant="text" component="span">
              Date
            </Typography>
            {loading ? (
              <Skeleton
                variant="text"
                sx={{ fontSize: '1rem' }}
                width={150}
                animation="wave"
              />
            ) : (
              <Typography variant="body" component="span">
                {dealDate
                  ? moment(dealDate).format('MM/DD/YYYY')
                  : 'Not available'}
              </Typography>
            )}
          </S.TransactionInfo>
          <S.TransactionInfo>
            <Typography variant="text" component="span">
              Address
            </Typography>
            {loading ? (
              <Skeleton
                variant="text"
                sx={{ fontSize: '1rem' }}
                width={150}
                animation="wave"
              />
            ) : (
              <Typography variant="body" component="span">
                {elispsedAddress}
              </Typography>
            )}
          </S.TransactionInfo>
          <S.TransactionInfo>
            <Typography variant="text" component="span">
              Asset
            </Typography>
            {loading ? (
              <Skeleton
                variant="text"
                sx={{ fontSize: '1rem' }}
                width={150}
                animation="wave"
              />
            ) : (
              <Typography variant="body" component="span">
                {asset?.toUpperCase() ?? 'Not Available'}
              </Typography>
            )}
          </S.TransactionInfo>
        </S.TransactionInfoList>
        {agents && (
          <S.TransactionBrokersInvolvedWrapper>
            <RenderIf condition={agents[0]?.id}>
              <>
                <RenderIf condition={!!agents[0]}>
                  {loading ? (
                    <Skeleton
                      variant="rectangular"
                      height={60}
                      width={60}
                      sx={{ borderRadius: 3 }}
                      animation="wave"
                    />
                  ) : (
                    <BrokerAvatarLink broker={agents[0] as Broker} />
                  )}
                </RenderIf>

                <RenderIf condition={!!agents[1]}>
                  {loading ? (
                    <Skeleton
                      variant="rectangular"
                      height={60}
                      width={60}
                      sx={{ borderRadius: 3 }}
                      animation="wave"
                    />
                  ) : (
                    <BrokerAvatarLink broker={agents[1] as Broker} />
                  )}
                </RenderIf>

                <RenderIf condition={agents.length > 2}>
                  {loading ? (
                    <Skeleton
                      variant="rectangular"
                      height={60}
                      width={60}
                      sx={{ borderRadius: 3 }}
                      animation="wave"
                    />
                  ) : (
                    <BrokerAvatarLink
                      text={`${agents.length - 2}+`}
                      link="/agents"
                    />
                  )}
                </RenderIf>
              </>
            </RenderIf>
          </S.TransactionBrokersInvolvedWrapper>
        )}
      </S.TransactionContent>
    </S.TransactionCardWrapper>
  );
};
