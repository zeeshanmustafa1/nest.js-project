import type { Company } from '@/__generated__/types.d';
import { companyRankingsPageColumns } from '@/constants/tableColumns';
import { getCompanyRankings } from '@/utils/data/recentActivity';

import { Table } from '../Table';

interface AgenciesRankingsProps {
  agencies: Company[];
}

const AgenciesRanking: React.FC<AgenciesRankingsProps> = ({ agencies }) => {
  const agenciesRows = getCompanyRankings(agencies, 'agency');
  return (
    <Table rows={agenciesRows as any} columns={companyRankingsPageColumns} />
  );
};

export default AgenciesRanking;
