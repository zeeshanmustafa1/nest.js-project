import { dealRankingsTableColumns } from '@/constants/tableColumns';
import { Table } from '@/modules/common/components';
import { formatAmount } from '@/utils/helpers';
import { getUrlForPage } from '@/utils/urlMapper';

import { ProfileSectionContainer } from '../../styles';
import type { ProfileSectionProps } from '../../types';
import { ProfileSectionTitle } from '../SectionTitle';

export const ProfileDealRankings: React.FC<ProfileSectionProps> = ({
  agency,
  broker,
}) => {
  const deals = broker?.dealRanking || agency?.dealRanking || [];
  const dealRankingsData = deals.map((data, index) => ({
    id: data.id,
    position: index + 1,
    imageUrl: data.mainImage,
    address: data.address?.split(',', 1),
    price: data.salePrice
      ? `$${formatAmount(data.salePrice)}`
      : 'Not Available',
    sf: data.totalSquareFootageDeal
      ? `${formatAmount(data.totalSquareFootageDeal)} SF`
      : 'Not Available',
    asset: data.assetType,
    dealDate: data.closingDate,
    url: getUrlForPage(
      'transaction',
      data.slug,
      data.feeds && data?.feeds[0],
      data.transactionType
    ),
    type: 'ranking',
  })) as Rank<Transaction>[];

  const title = agency?.title || broker?.name;

  return (
    <ProfileSectionContainer aria-label={`Check ${title}'s best deals`}>
      <ProfileSectionTitle sectionName="Deal Rankings" />

      <Table columns={dealRankingsTableColumns} rows={dealRankingsData} />
    </ProfileSectionContainer>
  );
};
