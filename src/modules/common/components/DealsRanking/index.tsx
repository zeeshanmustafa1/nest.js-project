import type { Deal } from '@/__generated__/types.d';
import { dealRankingsTableColumns } from '@/constants/tableColumns';
import { getDealRankings } from '@/utils/data/recentActivity';

import { Table } from '../Table';

interface DealRankingsProps {
  deals: Deal[];
}

const DealsRanking: React.FC<DealRankingsProps> = ({ deals }) => {
  const dealRows = getDealRankings(deals);
  const dealsData = dealRows?.map((deal, index) => ({
    position: index + 1,
    ...deal,
  }));
  return <Table columns={dealRankingsTableColumns} rows={dealsData as any} />;
};

export default DealsRanking;
