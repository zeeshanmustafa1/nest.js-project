import { Box, Typography } from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';

import type { Deal } from '@/__generated__/types.d';
import { activityTableColumns } from '@/constants/tableColumns';
import { Table } from '@/modules/common/components';
import theme from '@/theme';
import { formatAmount } from '@/utils/helpers';
import { getUrlForPage } from '@/utils/urlMapper';

import * as S from '../../styles';
import type { ProfileSectionProps } from '../../types';
import { ProfileSectionTitle } from '../SectionTitle';

export interface ProfileRecentActivityProps extends ProfileSectionProps {
  tags?: Array<string>;
}

export const ProfileRecentActivity: React.FC<ProfileRecentActivityProps> = ({
  agency,
  broker,
  tags,
}) => {
  // const [page, setPage] = useState<number>(1);
  const title = agency?.title || broker?.name;
  const deals: Deal[] = agency?.deals || broker?.deals || [];

  const distantPast = new Date(0);

  const sortedDeals = [...deals]?.sort((a, b) => {
    const dateA: Date = a.closingDate ? new Date(a.closingDate) : distantPast;
    const dateB: Date = b.closingDate ? new Date(b.closingDate) : distantPast;
    return dateB.getTime() - dateA.getTime();
  });

  const dealRankingsData = sortedDeals?.map((data, index) => {
    return {
      id: data?.id,
      position: index + 1,
      imageUrl: data?.mainImage,
      dealDate: data?.closingDate,
      agents: data?.profiles,
      address: data?.address?.split(',', 1),
      state: (data.properties && data?.properties[0]?.state) || 'Not Available',
      price: data?.salePrice
        ? `$${formatAmount(data.salePrice)}`
        : 'Not Available',
      ppsf: data?.pricePerSquareFoot ? `$${data.pricePerSquareFoot}` : 0,
      sf: data.totalSquareFootageDeal
        ? formatAmount(data.totalSquareFootageDeal)
        : 'Not Available',
      asset: data?.assetType,
      url: getUrlForPage(
        'transaction',
        data?.slug,
        data.feeds && data?.feeds[0],
        data?.transactionType
      ),
    };
  }) as Rank<Transaction>[];

  const [currentDeals, setCurrentDeals] = useState<Rank<Transaction>[]>(
    dealRankingsData?.slice(0, 5)
  );

  useEffect(() => {
    setCurrentDeals(dealRankingsData?.slice(0, 5));
  }, []);

  return (
    <S.ProfileSectionContainer aria-label={`${title}'s last transactions`}>
      <ProfileSectionTitle sectionName="Activity" />

      <Box display="flex" justifyContent="center" gap={3}>
        {tags?.map((tag) => (
          <Box
            key={tag}
            display="flex"
            alignItems="center"
            flexDirection={['column', 'row']}
          >
            <Typography fontSize={24} color={theme.palette.secondary.darker}>
              {tag ? `${tag?.split('X')[0]}X` : ''}
            </Typography>
            <Typography
              fontSize={14}
              lineHeight={[null, 8]}
              fontWeight={600}
              marginLeft={1}
            >
              {tag ? `${tag?.split('X')[1]?.toUpperCase()}` : ''}
            </Typography>
          </Box>
        ))}
      </Box>

      {deals?.length && (
        <Box>
          <Typography fontWeight={600} color={theme.palette.secondary.darker}>
            Tracked Since:{' '}
            {moment(deals[(deals?.length as number) - 1]?.closingDate).format(
              'L'
            )}
          </Typography>
        </Box>
      )}

      <Table columns={activityTableColumns} rows={currentDeals} />
      <Box
        paddingTop="10px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        marginTop={3}
      >
        {/* <IconButton
          disabled={page === 1}
          onClick={() => page >= 1 && setPage(page - 1)}
        >
          <NavigateBefore />
        </IconButton>
         <Pagination
          count={deals?.length ? Math.ceil((deals?.length as number) / 4) : 0}
          hidePrevButton
          hideNextButton
          siblingCount={2}
          page={page}
          onChange={(_, p) => setPage(p)}
        />
        <IconButton
          disabled={
            page ===
            (deals?.length ? Math.ceil((deals?.length as number) / 4) : 0)
          }
          onClick={() =>
            page <= (Math.ceil(deals?.length as number) || 0) &&
            setPage(page + 1)
          }
        >
          <NavigateNext />
        </IconButton> */}
      </Box>
    </S.ProfileSectionContainer>
  );
};
