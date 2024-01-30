import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRef } from 'react';

import type { Broker, Company, Graph } from '@/__generated__/types.d';
import { RenderIf } from '@/modules/common/components';

import type {
  AgentRankingsProps,
  AgentsProps,
  CompanyAndContactProps,
  ProfileHeaderProps,
  ProfileMenuNavProps,
  ProfileRecentActivityProps,
  TopAgentsProps,
} from '../../components';
import type { ProfileLastDealAndProfilePicProps } from '../../components/LastDealAndProfilePic/types';
import PieChart from '../../components/PieChart/PieChart';
import type { ProfileSectionProps, StatisticsSectionProps } from '../../types';
import * as S from '../styles';

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
const DynamicProfileSocialMediaLinks = dynamic<ProfileSectionProps>(() =>
  import('../../components').then((comp) => comp.ProfileSocialMediaLinks)
);
const DynamicProfileStatistics = dynamic<StatisticsSectionProps>(() =>
  import('../../components').then((comp) => comp.ProfileStatistics)
);
const DynamicProfileStatisticsSummary = dynamic<ProfileSectionProps>(() =>
  import('../../components').then((comp) => comp.ProfileStatisticsSummary)
);
const DynamicProfileTransactions = dynamic<ProfileSectionProps>(() =>
  import('../../components').then((comp) => comp.ProfileTransactions)
);
const DynamicTopAgents = dynamic<TopAgentsProps>(() =>
  import('../../components').then((comp) => comp.TopAgents)
);
const DynamicAgents = dynamic<AgentsProps>(() =>
  import('../../components').then((comp) => comp.Agents)
);
const DynamicAgentsRankings = dynamic<AgentRankingsProps>(() =>
  import('../../components').then((comp) => comp.ProfileAgentRankings)
);
const DynamicAbout = dynamic<CompanyAndContactProps>(() =>
  import('../../components').then((comp) => comp.About)
);

interface LenderProfileProps {
  lender: Company;
  lenderChartData: Graph | undefined | null;
}

export const LenderProfilePage: React.FC<LenderProfileProps> = ({
  lender,
  lenderChartData,
}) => {
  const transactionRef = useRef<Array<HTMLElement | null>>([]);

  const scrollTo = (index: number) => {
    const y =
      (transactionRef.current[index]?.getBoundingClientRect()?.top || 0) +
      window.pageYOffset -
      150;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <S.ProfilePage>
      <Box position="relative">
        {/* <RenderIf condition={lender?.mainImage}>
          <Box display="flex" justifyContent="center">
            <Image
              alt="Lender Image"
              src={lender?.mainImage || ''}
              width={150}
              height={150}
            />
          </Box>
        </RenderIf> */}

        <DynamicProfileHeader
          agency={lender}
          titleStylesOverride={{ fontSize: 44 }}
        />
        <DynamicProfileSocialMediaLinks agency={lender} />
        <DynamicProfileLeaderboardsHighlights
          title={lender.title as string}
          tags={[
            lender?.stateWithMostDeals as string,
            lender?.assetTypeWithMostDeals as string,
            lender?.fellowWithMostDeals as string,
          ]}
        />

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

        <DynamicProfileLastDealAndProfilePic
          type="Agency"
          pictureUrl="/assets/Shapes/Offices.svg"
          title={lender.title}
          lastClosing={lender.lastDeal?.lastClosing}
          lastDeal={lender?.lastDeal}
          isStaticImage
        />
      </Box>

      <DynamicProfileStatisticsSummary agency={lender} />
      <S.ProfileSections>
        <S.ProfileSectionsContainer>
          <RenderIf condition={!!lender?.agents}>
            <DynamicTopAgents
              brokers={lender?.agents as Broker[]}
              onClick={() => scrollTo(3)}
            />
          </RenderIf>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              transactionRef.current[0] = el;
            }}
          >
            <DynamicProfileTransactions
              agency={lender}
              slug={lender?.slug}
              dealsCount={lender?.dealsCount as number}
              agencyType="Lender"
            />
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              transactionRef.current[1] = el;
            }}
          >
            <DynamicProfileRecentActivity
              agency={lender}
              tags={[
                lender?.stateWithMostDeals as string,
                lender?.fellowWithMostDeals as string,
                lender?.assetTypeWithMostDeals as string,
              ]}
            />
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              transactionRef.current[2] = el;
            }}
          >
            <RenderIf condition={lender?.agents?.length}>
              <DynamicAgents brokers={lender?.agents as Broker[]} />
            </RenderIf>
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              transactionRef.current[3] = el;
            }}
          >
            <DynamicAgentsRankings
              agentRankings={lender?.agentRanking as Broker[]}
            />
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              transactionRef.current[4] = el;
            }}
          >
            <DynamicProfileDealRankings agency={lender} />
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              transactionRef.current[5] = el;
            }}
          >
            <DynamicAbout agency={lender} />
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              transactionRef.current[6] = el;
            }}
          >
            {lenderChartData && (
              <DynamicProfileStatistics
                agencyChartData={lenderChartData}
                type="agency"
              />
            )}
            <PieChart slug={lender.slug} companyType="Lender" />
          </S.ProfileSectionRefContainer>
        </S.ProfileSectionsContainer>
        <DynamicProfileMenuNav
          scrollTo={scrollTo}
          link={`https://traded.co/lender/${lender?.slug}/`}
        />
      </S.ProfileSections>
    </S.ProfilePage>
  );
};
