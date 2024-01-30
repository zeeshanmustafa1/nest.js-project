import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRef } from 'react';

import type { Broker, Deal } from '@/__generated__/types.d';
import { ClientOnly } from '@/modules/common/components';

import type {
  CompanyAndContactProps,
  ProfileHeaderProps,
  ProfileMenuNavProps,
  ProfileRecentActivityProps,
} from '../../components';
import type { ProfileLastDealAndProfilePicProps } from '../../components/LastDealAndProfilePic/types';
import PieChart from '../../components/PieChart/PieChart';
import type {
  BrokerProfileSectionProps,
  ProfileSectionProps,
  StatisticsSectionProps,
} from '../../types';
import * as S from '../styles';

interface AgentProfileProps {
  broker: Broker;
  graphStats?: any;
  relationships?: any;
}

const DynamicProfileContact = dynamic<ProfileSectionProps>(() =>
  import('../../components').then((comp) => comp.ProfileContact)
);
const DynamicProfileDealRankings = dynamic<ProfileSectionProps>(() =>
  import('../../components').then((comp) => comp.ProfileDealRankings)
);
const DynamicProfileHeader = dynamic<ProfileHeaderProps>(() =>
  import('../../components').then((comp) => comp.ProfileHeader)
);
const DynamicProfileLastDealAndProfilePic =
  dynamic<ProfileLastDealAndProfilePicProps>(() =>
    import('../../components').then((comp) => comp.ProfileLastDealAndProfilePic)
  );
const DynamicProfileLeaderboardsHighlights = dynamic<{
  title: string;
  tags?: Array<string>;
  scrollTo?: Function;
}>(() =>
  import('../../components').then((comp) => comp.ProfileLeaderboardsHighlights)
);
const DynamicProfileMenuNav = dynamic<ProfileMenuNavProps>(() =>
  import('../../components').then((comp) => comp.ProfileMenuNav)
);
const DynamicProfileRecentActivity = dynamic<ProfileRecentActivityProps>(() =>
  import('../../components').then((comp) => comp.ProfileRecentActivity)
);
const DynamicProfileRelationships = dynamic<BrokerProfileSectionProps>(() =>
  import('../../components').then((comp) => comp.ProfileRelationships)
);
const DynamicProfileSocialMediaLinks = dynamic<ProfileSectionProps>(() =>
  import('../../components').then((comp) => comp.ProfileSocialMediaLinks)
);
const DynamicProfileStatistics = dynamic<StatisticsSectionProps>(() =>
  import('../../components').then((comp) => comp.AgentProfileStatistics)
);
const DynamicProfileStatisticsSummary = dynamic<ProfileSectionProps>(() =>
  import('../../components').then((comp) => comp.ProfileStatisticsSummary)
);
const DynamicProfileTransactions = dynamic<ProfileSectionProps>(() =>
  import('../../components').then((comp) => comp.ProfileTransactions)
);
const DynamicCompanyAndContact = dynamic<CompanyAndContactProps>(() =>
  import('../../components').then((comp) => comp.CompanyAndContact)
);
// const DynamicLeaderboards = dynamic<ILeaderboardsProps>(() =>
//   import('../../components').then((comp) => comp.Leaderboards)
// );

const DynamicBiography = dynamic<ProfileSectionProps>(() =>
  import('../../components').then((comp) => comp.Biography)
);

export const AgentProfilePage: React.FC<AgentProfileProps> = ({
  broker,
  graphStats,
  relationships,
}) => {
  // const [agentLeaderboardData, setAgentLeaderboardData] = useState<
  //   ILeaderBoardSlide[] | null
  // >(null);
  // useEffect(() => {
  //   fetch(`/api/brokerLeaderBoard/${broker?.slug}`, {
  //     method: 'POST',
  //   })
  //     .then((res) => res.json())
  //     .then((res) =>
  //       setAgentLeaderboardData(
  //         getAgentLeaderBoardSlidesData(res?.data?.agentLeaderBoards)
  //       )
  //     );
  // }, [broker]);
  const blockRef = useRef<Array<HTMLElement | null>>([]);

  const noRelationships =
    relationships?.agencies?.totalCount === 0 &&
    relationships?.agents?.totalCount === 0 &&
    relationships?.lenders?.totalCount === 0;

  const scrollTo = (index: number) => {
    const y =
      (blockRef.current[index]?.getBoundingClientRect()?.top || 0) +
      window.pageYOffset -
      150;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  return (
    <S.ProfilePage>
      <Box position="relative">
        <DynamicProfileHeader broker={broker} scrollTo={scrollTo} />

        <DynamicProfileSocialMediaLinks broker={broker} />

        <Box position="absolute" left={8} top={5} zIndex={-1}>
          <Image
            src="/assets/Shapes/ProfileHeaderShapes.svg"
            alt="Dots and stars shapes"
            width={200}
            height={200}
          />
        </Box>

        <Box position="absolute" right={310} top={130} zIndex={-1}>
          <Image
            src="/assets/Shapes/AgentAster.svg"
            alt="Dots and stars shapes"
            width={50}
            height={50}
          />
        </Box>

        <DynamicCompanyAndContact
          broker={broker}
          scrollTo={() => scrollTo(6)}
        />

        <DynamicProfileLeaderboardsHighlights
          title={broker?.name as string}
          tags={[
            ...(broker?.leaderBoardTags as string[]),
            broker.leaderBoardTags?.length === 0
              ? ''
              : `${broker?.leaderBoardTags?.length || 0} Leaderboard${
                  (broker?.leaderBoardTags?.length || 0) > 1 ? 's' : ''
                }`,
            broker?.stateWithMostDeals as string,
            broker?.fellowWithMostDeals as string,
            broker?.assetTypeWithMostDeals as string,
          ]}
          scrollTo={() => scrollTo(4)}
        />

        <DynamicProfileLastDealAndProfilePic
          type="Agent"
          title={broker?.name}
          pictureUrl={broker?.thumbnail as string}
          lastClosing={broker?.lastClosing}
          lastDeal={broker?.lastDeal}
        />
        <Box
          display={['none', 'none', 'none', 'flex']}
          alignItems="flex-end"
          position="absolute"
          right={-85}
          bottom={-70}
          zIndex={-1}
        >
          <Image
            src="/assets/Shapes/CircularArrows.svg"
            alt="Circular Arrows"
            width={400}
            height={320}
          />
          <Box
            display="flex"
            alignItems="flex-end"
            position="absolute"
            right={-10}
            bottom={70}
            zIndex={-1}
          >
            <Image
              src="/assets/Shapes/AgentPicturesStarsAndDots.svg"
              alt="Stars and dots shapes"
              width={100}
              height={100}
            />
          </Box>
        </Box>
        <Box position="absolute" left={-12} bottom={75} zIndex={-1}>
          <Image
            src="/assets/Shapes/Star.svg"
            alt="Star Shape"
            width={50}
            height={50}
          />
        </Box>
        <Box position="absolute" left={-30} bottom={-140} zIndex={-1}>
          <Image
            src="/assets/Shapes/Ellipse.svg"
            alt="Ellipse Shape"
            width={320}
            height={250}
          />
        </Box>
      </Box>
      <DynamicProfileStatisticsSummary broker={broker} />
      <S.ProfileSections>
        <S.ProfileSectionsContainer>
          <S.ProfileSectionRefContainer
            ref={(el) => {
              blockRef.current[0] = el;
            }}
          >
            <ClientOnly>
              <DynamicProfileTransactions
                broker={broker}
                dealsCount={broker?.dealsCount as number}
                slug={broker?.slug}
              />
            </ClientOnly>
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              blockRef.current[1] = el;
            }}
          >
            <DynamicProfileRelationships broker={broker as Broker} />
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              blockRef.current[2] = el;
            }}
          >
            <DynamicProfileRecentActivity
              broker={broker}
              tags={[
                broker?.stateWithMostDeals as string,
                broker?.fellowWithMostDeals as string,
                broker?.assetTypeWithMostDeals as string,
              ]}
            />
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              blockRef.current[3] = el;
            }}
          >
            <DynamicProfileDealRankings broker={broker} />
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              blockRef.current[4] = el;
            }}
          >
            {/* <RenderIf condition={agentLeaderboardData?.length}>
              <DynamicLeaderboards
                leaderBoardSlides={agentLeaderboardData}
                deals={broker?.deals}
                currentBroker={broker}
              />
            </RenderIf> */}
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              blockRef.current[5] = el;
            }}
          >
            <DynamicProfileStatistics
              deals={
                graphStats?.filter(
                  (deal: any) => deal?.salePrice && deal?.closingDate
                ) as Deal[]
              }
              type="agent"
              // toolTip
            />
            <PieChart slug={broker.slug as any} />
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              blockRef.current[6] = el;
            }}
          >
            <DynamicBiography broker={broker} />
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              blockRef.current[7] = el;
            }}
          >
            <DynamicProfileContact broker={broker} />
          </S.ProfileSectionRefContainer>
        </S.ProfileSectionsContainer>
        <DynamicProfileMenuNav
          scrollTo={scrollTo}
          link={`https://traded.co/agent/${broker?.slug}/`}
          noRelationships={noRelationships}
        />
      </S.ProfileSections>
    </S.ProfilePage>
  );
};
