import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRef } from 'react';

import type { Broker, Company, Graph } from '@/__generated__/types.d';
import { RenderIf } from '@/modules/common/components';

import type {
  AgentRankingsProps,
  CompanyAndContactProps,
  ProfileHeaderProps,
  ProfileRecentActivityProps,
  TopAgentsProps,
} from '../../components';
import type { AgentsProps } from '../../components/Agents';
import type { ProfileLastDealAndProfilePicProps } from '../../components/LastDealAndProfilePic/types';
import type { ProfileMenuNavProps } from '../../components/MenuNav';
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
const DynamicCompanyAndContact = dynamic<CompanyAndContactProps>(() =>
  import('../../components').then((comp) => comp.CompanyAndContact)
);
const DynamicAbout = dynamic<CompanyAndContactProps>(() =>
  import('../../components').then((comp) => comp.About)
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

export interface AgencyProfileProps {
  agency: Company;
  agencyChartData: Graph | undefined | null;
}

export const AgencyProfilePage: React.FC<AgencyProfileProps> = ({
  agency,
  agencyChartData,
}) => {
  const transactionRef = useRef<Array<HTMLElement | null>>([]);

  const scrollTo = (index: number) => {
    const y =
      (transactionRef.current[index]?.getBoundingClientRect()?.top || 0) +
      window.pageYOffset -
      150;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <S.ProfilePage>
      <Box position="relative">
        <DynamicProfileHeader
          agency={agency}
          titleStylesOverride={{ fontSize: 44 }}
          isMobile={isMobile}
        />
        <DynamicProfileSocialMediaLinks agency={agency} />
        <DynamicCompanyAndContact agency={agency} />
        <DynamicProfileLeaderboardsHighlights
          title={agency.title as string}
          tags={[
            agency?.stateWithMostDeals as string,
            agency?.assetTypeWithMostDeals as string,
            agency?.fellowWithMostDeals as string,
          ]}
          scrollTo={() => scrollTo(1)}
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
          title={agency.title}
          lastClosing={agency.lastDeal?.lastClosing}
          lastDeal={agency?.lastDeal}
          isStaticImage
        />
      </Box>
      <DynamicProfileStatisticsSummary agency={agency} />

      <S.ProfileSections>
        <S.ProfileSectionsContainer>
          <RenderIf condition={!!agency?.agents}>
            <DynamicTopAgents
              brokers={agency?.agents as Broker[]}
              onClick={() => scrollTo(3)}
            />
          </RenderIf>
          <S.ProfileSectionRefContainer
            ref={(el) => {
              transactionRef.current[0] = el;
            }}
          >
            <DynamicProfileTransactions
              agency={agency}
              slug={agency?.slug}
              dealsCount={agency?.dealsCount as number}
              agencyType="Agency"
            />
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              transactionRef.current[1] = el;
            }}
          >
            <DynamicProfileRecentActivity
              agency={agency}
              tags={[
                agency?.stateWithMostDeals as string,
                agency?.fellowWithMostDeals as string,
                agency?.assetTypeWithMostDeals as string,
              ]}
            />
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              transactionRef.current[2] = el;
            }}
          >
            <RenderIf condition={agency?.agents?.length}>
              <DynamicAgents brokers={agency?.agents as Broker[]} />
            </RenderIf>
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              transactionRef.current[3] = el;
            }}
          >
            <DynamicAgentsRankings
              agentRankings={agency?.agentRanking as Broker[]}
            />
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              transactionRef.current[4] = el;
            }}
          >
            <DynamicProfileDealRankings agency={agency} />
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              transactionRef.current[5] = el;
            }}
          >
            <DynamicAbout agency={agency} />
          </S.ProfileSectionRefContainer>

          <S.ProfileSectionRefContainer
            ref={(el) => {
              transactionRef.current[6] = el;
            }}
          >
            {agencyChartData && (
              <DynamicProfileStatistics
                agencyChartData={agencyChartData}
                type="agency"
              />
            )}
            <PieChart slug={agency.slug} companyType="Agency" />
          </S.ProfileSectionRefContainer>
        </S.ProfileSectionsContainer>
        <DynamicProfileMenuNav
          scrollTo={scrollTo}
          link={`https://traded.co/agency/${agency?.slug}/`}
        />
      </S.ProfileSections>
    </S.ProfilePage>
  );
};
