import type { Company } from '@/__generated__/types.d';
import { companyRankingsPageColumns } from '@/constants/tableColumns';
import { getCompanyRankings } from '@/utils/data/recentActivity';

import { Table } from '../Table';

interface LendersRankingsProps {
  lenders: Company[];
}

const LendersRanking: React.FC<LendersRankingsProps> = ({ lenders }) => {
  const lendersRows = getCompanyRankings(lenders, 'lender');
  return (
    <Table rows={lendersRows as any} columns={companyRankingsPageColumns} />
  );
};

export default LendersRanking;
