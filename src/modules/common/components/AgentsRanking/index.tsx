import { agentRankingsPageColumns } from '@/constants/tableColumns';
import { getAgentRankings } from '@/utils/data/recentActivity';

import { Table } from '../Table';

interface AgentsRankingProps {
  brokers: any;
}

const AgentsRanking: React.FC<AgentsRankingProps> = ({ brokers }) => {
  const brokerRows = getAgentRankings(brokers);
  return <Table columns={agentRankingsPageColumns} rows={brokerRows as any} />;
};

export default AgentsRanking;
