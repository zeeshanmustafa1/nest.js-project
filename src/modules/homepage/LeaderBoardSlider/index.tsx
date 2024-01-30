import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { SelectChangeEvent } from '@mui/material';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import type { ResponsiveObject } from 'react-slick';
import Slider from 'react-slick';

import type { Broker } from '@/__generated__/types.d';
import { coveredLocations } from '@/constants';
import { leaderBoardData } from '@/constants/homepage';
import { BrokerAvatarLink, SelectLocation } from '@/modules/common/components';
import theme from '@/theme';
import { formatAmount } from '@/utils/helpers';

import * as S from './styles';

const defaultLocation = coveredLocations[0] as CoveredLocation;

export interface LeaderBoardSliderProps {
  leaderBoardSlides: ILeaderBoardSlide[];
  page: boolean | null;
}

const LeaderBoardSlider: React.FC<LeaderBoardSliderProps> = ({
  page,
  leaderBoardSlides,
}): JSX.Element => {
  const [location, setLocation] = useState<CoveredLocation>(defaultLocation);
  // const [leaderBoardSlidesData, setLeaderBoardsSlidesData] =
  //   useState(leaderBoardSlides);
  const leaderBoardSlidesData = leaderBoardSlides;

  const handleChangeLocation = (e: SelectChangeEvent<unknown>) => {
    const newState = e.target.value as string;

    const newLocation = coveredLocations.find(
      (l) => l.state === newState
    ) as CoveredLocation;

    setLocation(newLocation);
  };
  // useEffect(() => {
  //   fetch('/api/leaderBoards/', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       state: location?.state === 'National' ? null : location?.state,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) =>
  //       setLeaderBoardsSlidesData(
  //         getLeaderBoardSlidesData(res?.data?.leaderBoardResolver)
  //       )
  //     );
  // }, [location]);
  const responsive: ResponsiveObject[] = [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 920,
      settings: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 1,
      },
    },
  ];

  const BrokerListHeader: React.FC<ILeaderBoardSlide> = ({
    title,
    icon,
    subtitle,
  }: ILeaderBoardSlide): JSX.Element => (
    <S.BrokerListHeader>
      <S.BrokerListHeaderText>
        <S.Title>
          <Image src={icon} alt="Title Icon" width={18} height={20} />
          <Typography variant="h4" component="h4" ml={1}>
            {title}
          </Typography>
        </S.Title>
        <Typography variant="bodySmall" fontWeight={600}>
          {subtitle}
        </Typography>
      </S.BrokerListHeaderText>
    </S.BrokerListHeader>
  );

  const BrokerDetail: React.FC<ILeaderBoardSlide> = ({ brokers, title }) => {
    const [currentBrokers, setCurrentBrokers] = useState(brokers?.slice(0, 5));

    const handleViewMore = () => {
      if (currentBrokers?.length < 6) setCurrentBrokers(brokers?.slice(0, 15));
      else setCurrentBrokers(brokers?.slice(0, 5));
    };

    return (
      <>
        {brokers?.length ? (
          <Box>
            {currentBrokers.map((broker: Broker, index: number) => (
              <S.BrokerWrapper key={broker.name}>
                <S.BrokerNumber>
                  <Typography variant="h4">{index + 1}.</Typography>
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
                    >{`Deal Closed: ${broker?.dealsCount}`}</Typography>
                    <Typography
                      variant="text"
                      fontSize={14}
                      sx={{ color: theme.palette.grey['500'] }}
                    >
                      {title === 'Lease Beasts'
                        ? `SF: ${formatAmount(broker.totalSquareFootage)}`
                        : `Volume: $${formatAmount(broker.totalVolume)}`}
                    </Typography>

                    {/* <S.BrokerEarning> */}
                    {/* <Typography variant="text">$ {broker.}</Typography> */}
                    {/* <Typography variant="text">$ 123</Typography>
              <S.BrokerEarningPercentage>
                <Image
                  src="/assets/Arrows/GreenArrowUp.svg"
                  alt="Arrow icon"
                  width={6}
                  height={6}
                />
                <Typography variant="bodyLarge"> */}
                    {/* {broker.percentage}% */}
                    {/* 10%
                </Typography>
              </S.BrokerEarningPercentage>
            </S.BrokerEarning>
            <S.BrokerNameGroup>
              <Typography variant="text">{broker.name}</Typography>
              <Typography variant="bodySmall" sx={{ marginTop: '6px' }}> */}
                    {/* {broker.group} */}
                    {/* Test Group
              </Typography> */}
                    {/* </S.BrokerNameGroup> */}
                  </S.BrokerInfo>
                </S.BrokerDetail>
              </S.BrokerWrapper>
            ))}
            <Box mt={3} textAlign="center">
              <Typography
                fontSize={16}
                lineHeight="16px"
                fontWeight={600}
                margin="8px 0"
                color="#0073cf"
                onClick={() => handleViewMore()}
                sx={{ cursor: 'pointer' }}
              >
                {currentBrokers?.length < 6 ? 'View More' : 'View Less'}
              </Typography>
            </Box>
          </Box>
        ) : null}
      </>
    );
  };

  return (
    <S.MainDiv>
      <S.LeadershipWrapper>
        <S.Header>
          <SelectLocation
            showLocationIcon
            value={location}
            onChange={handleChangeLocation}
            sx={{ marginBottom: '30px' }}
          />
          {!page && (
            <Typography
              variant="h2"
              component="h2"
              sx={{ marginBottom: '20px' }}
            >
              {leaderBoardData?.heading}
            </Typography>
          )}

          <Typography variant="bodyLarge" component="h4" textAlign="center">
            {leaderBoardData?.subHeading}
          </Typography>
        </S.Header>

        <Slider
          slidesToShow={3}
          slidesToScroll={1}
          dots
          responsive={responsive}
          infinite={false}
        >
          {leaderBoardSlidesData?.map((slide) => (
            <S.BrokerListWrapper key={slide.title}>
              <BrokerListHeader {...slide} />
              <S.BrokerList>
                <BrokerDetail brokers={slide.brokers} title={slide?.title} />
              </S.BrokerList>
            </S.BrokerListWrapper>
          ))}
        </Slider>
      </S.LeadershipWrapper>
    </S.MainDiv>
  );
};

export { LeaderBoardSlider };
