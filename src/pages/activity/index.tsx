import { Box, Typography } from '@mui/material';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import type { RecentDealGetQuery } from '@/__generated__/types.d';
import { RecentDealGetDocument } from '@/__generated__/types.d';
import { WEBSITE_URL } from '@/constants';
import Page from '@/layouts/Page';
import { initializeApollo } from '@/modules/core/use-apollo';
import { RecentActivity } from '@/modules/homepage';
import { getRecentActivity } from '@/utils/data/recentActivity';

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const client = initializeApollo(ctx);

    const {
      data: { recentDeal },
    } = await client.query<RecentDealGetQuery>({
      query: RecentDealGetDocument,
      variables: {
        limit: 10,
      },
    });

    const recentActivity = getRecentActivity(recentDeal);

    return {
      props: {
        recentActivity,
      },
      revalidate: 60,
    };
  } catch {
    return {
      redirect: {
        destination: '/',
      },
      props: {},
    };
  }
};

type ActivityGetStaticProps = InferGetStaticPropsType<typeof getStaticProps>;

const ActivityPage: React.FC<ActivityGetStaticProps> = ({ recentActivity }) => {
  return (
    <Page title="Activity | Traded" canonical={`${WEBSITE_URL}/activity/`}>
      <Box
        maxWidth={1215}
        mr="auto"
        ml="auto"
        display="flex"
        textAlign="center"
        padding="50px 0px 0px 0px"
      >
        <Box flex="0 0 25%">
          <Image
            src="/assets/Shapes/DotsActivity.png"
            width={100}
            height={150}
            alt="shape"
          />
        </Box>
        <Box flex="0 0 50%">
          <Typography variant="h1" component="h1" aria-label="Activity" mb={1}>
            Activity
          </Typography>
          <Typography
            textAlign="center"
            fontSize={[16, 24, 24, 24]}
            lineHeight={['20px', '30px', '30px', '30px']}
            fontWeight={500}
            component="p"
            aria-label="Activity"
            mb={1}
          >
            View recent transactions across the nation
          </Typography>
        </Box>
        <Box flex="0 0 25%">
          <Image
            src="/assets/Icon/Colored/ActivityBuilding.svg"
            width={200}
            height={200}
            alt="building"
          />
        </Box>
      </Box>

      <Box>
        <Box maxWidth={1215} mr="auto" ml="auto" display="flex">
          <RecentActivity
            recentActivity={recentActivity}
            showActivityFeedButton={false}
          />
        </Box>
      </Box>
    </Page>
  );
};

export default ActivityPage;
