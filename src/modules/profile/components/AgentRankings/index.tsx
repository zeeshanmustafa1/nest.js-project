import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Box, IconButton, Pagination } from '@mui/material';
import { useEffect, useState } from 'react';

import type { Broker } from '@/__generated__/types.d';
import { agentRankingsColumns } from '@/constants/tableColumns';
import { Table } from '@/modules/common/components';
import { formatAmount } from '@/utils/helpers';
import { getUrlForPage } from '@/utils/urlMapper';

import { ProfileSectionContainer } from '../../styles';
import { ProfileSectionTitle } from '../SectionTitle';

export interface AgentRankingsProps {
  agentRankings: Broker[];
}

export const ProfileAgentRankings: React.FC<AgentRankingsProps> = ({
  agentRankings,
}) => {
  const [page, setPage] = useState<number>(1);

  const agentRankingsData = agentRankings.map((agent, index) => ({
    id: `${agent?.id}-${agent?.name}-${index + 1}`,
    position: index + 1,
    imageUrl: agent?.thumbnail,
    name: agent?.name,
    volume: agent?.totalVolume
      ? `$${formatAmount(agent?.totalVolume)}`
      : 'Not Available',
    sales: agent?.dealsCount || '0',
    loans: agent?.totalLoanDeals || '0',
    lease: agent?.totalLeaseDeals || '0',
    sf: agent?.totalSquareFootage
      ? `${formatAmount(agent?.totalSquareFootage)}`
      : 'Not Available',
    dealDate: agent?.lastDeal?.closingDate,
    url: getUrlForPage('agent', agent.slug),
    type: 'agentRanking',
  }));

  const [currentAgents, setCurrentAgents] = useState(
    agentRankingsData?.slice(0, 5)
  );

  useEffect(() => {
    const offset = page * 5;
    const start = offset - 5;
    setCurrentAgents(agentRankingsData?.slice(start, offset));
  }, [page]);

  return (
    <ProfileSectionContainer aria-label="Agent Rankings Section">
      <ProfileSectionTitle sectionName="Agent Rankings" />

      <Table columns={agentRankingsColumns} rows={currentAgents} />
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
          count={
            agentRankings?.length
              ? Math.ceil((agentRankings?.length as number) / 5)
              : 0
          }
          hidePrevButton
          hideNextButton
          siblingCount={2}
          page={page}
          onChange={(_, p) => setPage(p)}
        />
        <IconButton
          disabled={
            page ===
            (agentRankings?.length
              ? Math.ceil((agentRankings?.length as number) / 4)
              : 0)
          }
          onClick={() =>
            page <= (Math.ceil(agentRankings?.length as number) || 0) &&
            setPage(page + 1)
          }
        >
          <NavigateNext />
        </IconButton>
      </Box>
    </ProfileSectionContainer>
  );
};
