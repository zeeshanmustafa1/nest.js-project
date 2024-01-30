import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box, Link, Typography } from '@mui/material';
import moment from 'moment';
import Image from 'next/image';
import type { ResponsiveObject } from 'react-slick';
import Slider from 'react-slick';

import type { Broker, Deal, Maybe } from '@/__generated__/types.d';
import { BrokerAvatarLink } from '@/modules/common/components';
import theme from '@/theme';
import { formatAmount } from '@/utils/helpers';

import { ProfileSectionTitle } from '../SectionTitle';
import * as S from './styles';

export interface ILeaderboardsProps {
  leaderBoardSlides: ILeaderBoardSlide[] | null;
  deals?: Maybe<Deal[]> | undefined;
  currentBroker: Broker;
}

const responsive: ResponsiveObject[] = [
  {
    breakpoint: 1024,
    settings: {
      slidesToScroll: 1,
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToScroll: 1,
      slidesToShow: 1,
    },
  },
];

export const Leaderboards: React.FC<ILeaderboardsProps> = ({
  leaderBoardSlides,
  deals,
  currentBroker,
}) => {
  const BrokerListHeader: React.FC<ILeaderBoardSlide> = ({
    title,
    icon,
    subtitle,
  }: ILeaderBoardSlide): JSX.Element => (
    <S.BrokerListHeader>
      <S.BrokerListHeaderText>
        <S.Title>
          <Image src={icon} alt="Title Icon" width={20} height={20} />
          <Typography variant="h4" component="h4" marginLeft={2}>
            {title}
          </Typography>
        </S.Title>
        <Typography variant="text" marginTop={1}>
          {subtitle}
        </Typography>
      </S.BrokerListHeaderText>
      <S.BrokerListExternalLinkImage>
        <Link href="/leaderboards">
          <Image
            alt="Map Icon regarding the location."
            src="/assets/Arrows/ExternalLinkArrow.svg"
            width={20}
            height={20}
            loading="lazy"
          />
        </Link>
      </S.BrokerListExternalLinkImage>
    </S.BrokerListHeader>
  );

  const BrokerDetail: React.FC<ILeaderBoardSlide> = ({ brokers, title }) => {
    let pos: number;
    for (
      let j = 0;
      j < (currentBroker.leaderBoardTags?.length as number);
      // eslint-disable-next-line no-plusplus
      j++
    ) {
      if (
        title?.match(
          currentBroker?.leaderBoardTags?.[j]?.split(' ')[1] as string
        )
      ) {
        pos =
          Math.floor(
            parseInt(
              currentBroker?.leaderBoardTags?.[j]?.match(
                /(\d+)/
              )?.[0] as string,
              10
            ) / 5
          ) * 5;
        if (pos === 0) {
          pos = 1;
        }
      }
    }
    return brokers.map((broker: Broker, index: number) => (
      <S.BrokerWrapper
        key={broker.name}
        isCurrentAgent={currentBroker.id === broker.id}
      >
        <S.BrokerNumber>
          <Typography variant="h4">{index + pos}.</Typography>
        </S.BrokerNumber>
        <S.BrokerDetail>
          <BrokerAvatarLink
            broker={{
              thumbnail: broker.thumbnail,
              slug: broker.slug,
            }}
          />
          <S.BrokerInfo>
            <Typography variant="text" fontSize={17} fontWeight={600}>
              {broker.name}
            </Typography>
            <Typography
              variant="text"
              fontSize={14}
              sx={{ color: theme.palette.grey['500'] }}
            >{`Deals Closed: ${broker?.dealsCount}`}</Typography>
            <Typography
              variant="text"
              fontSize={14}
              sx={{ color: theme.palette.grey['500'] }}
            >
              {title === 'Lease Beasts'
                ? `SF: ${formatAmount(broker.totalSquareFootage)}`
                : `Volume: $${formatAmount(broker.totalVolume)}`}
            </Typography>
          </S.BrokerInfo>
        </S.BrokerDetail>
      </S.BrokerWrapper>
    ));
  };
  return (
    <S.BrokerLeaderBoardWrapper>
      <ProfileSectionTitle sectionName="Leaderboards" />
      <S.LeaderBoardText>
        <Box marginBottom={10} display="flex" justifyContent="space-between">
          <Typography
            variant="text"
            fontSize={18}
            flexBasis="55%"
            fontWeight={500}
          >
            Traded creates agent leaderboards using our proprietary database of
            real estate transactions.
          </Typography>
          {deals?.length && (
            <Typography fontWeight={600} color={theme.palette.secondary.darker}>
              Tracked Since:{' '}
              {moment(deals[(deals?.length as number) - 1]?.closingDate).format(
                'L'
              )}
            </Typography>
          )}
        </Box>
      </S.LeaderBoardText>
      <Slider
        slidesToShow={2}
        slidesToScroll={1}
        dots
        responsive={responsive}
        infinite={false}
      >
        {leaderBoardSlides?.map((slide) => (
          <S.BrokerListWrapper key={slide.title}>
            <BrokerListHeader {...slide} />
            <S.BrokerList>
              <BrokerDetail brokers={slide.brokers} title={slide.title} />
            </S.BrokerList>
          </S.BrokerListWrapper>
        ))}
      </Slider>
    </S.BrokerLeaderBoardWrapper>
  );
};
