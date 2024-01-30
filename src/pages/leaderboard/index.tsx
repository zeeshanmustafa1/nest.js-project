import { Box, Typography } from '@mui/material';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import type { LeaderBoardGetQuery } from '@/__generated__/types.d';
import { LeaderBoardGetDocument } from '@/__generated__/types.d';
import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';
import { ClientOnly } from '@/modules/common/components';
import { initializeApollo } from '@/modules/core/use-apollo';
import { LeaderBoardSlider, Newsletter } from '@/modules/homepage';
import {
  getLeaderBoardSlidesData,
  getMiniLeaderBoardData,
} from '@/utils/data/leaderboard';

import * as S from '../../modules/common/components/Leaderboard/styles';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const client = initializeApollo(ctx);

  const {
    data: { leaderBoardResolver },
  } = await client.query<LeaderBoardGetQuery>({
    query: LeaderBoardGetDocument,
  });

  const brokerRows = getMiniLeaderBoardData(leaderBoardResolver);
  const leaderBoardSlides = getLeaderBoardSlidesData(leaderBoardResolver);

  return {
    props: {
      brokerRows,
      leaderBoardSlides,
    },
    revalidate: 30,
  };
};

type LeaderboardsStaticProps = InferGetStaticPropsType<typeof getStaticProps>;

const LeaderBoardsPage: React.FC<LeaderboardsStaticProps> = ({
  leaderBoardSlides,
}) => {
  return (
    <Page
      title="Leaderboard | Traded"
      canonical={`${WEBSITE_URL}/leaderboard/`}
    >
      <S.LeaderBoardsWrapper>
        <Box position="absolute" left={50} top={95} zIndex={-1}>
          <Image
            src="/assets/Shapes/ProfileHeaderShapes.svg"
            alt="Dots and stars shapes"
            width={200}
            height={200}
          />
        </Box>
        <S.HeaderWrapper>
          <Typography
            fontSize={[14, 21, 21]}
            fontWeight={600}
            letterSpacing={0.5}
            textTransform="uppercase"
            lineHeight="14px"
            color="black"
            marginBottom="20px"
            marginTop="50px"
            component="h2"
          >
            People
          </Typography>
          <Typography
            fontSize={[40, 60, 60]}
            fontWeight={900}
            lineHeight="38px"
            color="black"
            marginBottom="28px"
          >
            Leaderboards
          </Typography>
          <Typography
            fontSize={[14, 20, 20]}
            fontWeight={600}
            letterSpacing={0.5}
            lineHeight="14px"
            color="black"
            marginBottom="20px"
          >
            Find the most active brokers, lenders, owners and people in real
            estate.
          </Typography>
        </S.HeaderWrapper>
        <S.MainSliderWrapper>
          <S.SliderWraper>
            <LeaderBoardSlider
              leaderBoardSlides={leaderBoardSlides}
              page={true}
            />
          </S.SliderWraper>
        </S.MainSliderWrapper>

        <ClientOnly>
          <Newsletter />
        </ClientOnly>
      </S.LeaderBoardsWrapper>
    </Page>
  );
};

export default LeaderBoardsPage;
