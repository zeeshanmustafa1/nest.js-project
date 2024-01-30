import type { SelectChangeEvent } from '@mui/material';
import { Box, Button, Typography } from '@mui/material';
import toStartCase from 'lodash/startCase';
import moment from 'moment';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { coveredLocations } from '@/constants';
import { activityPageTableColumns } from '@/constants/tableColumns';
import { SelectLocation, Table } from '@/modules/common/components';
import { getRecentActivity } from '@/utils/data/recentActivity';

import * as S from './styles';

const defaultLocation = coveredLocations[0] as CoveredLocation;

interface HomepageRecentActivityProps {
  recentActivity: IRecentActivity;
  showActivityFeedButton?: boolean;
}

const RecentActivity: React.FC<HomepageRecentActivityProps> = ({
  recentActivity,
  showActivityFeedButton = true,
}) => {
  const [location, setLocation] = useState<CoveredLocation>(defaultLocation);
  const [recentDeals, setRecentDeals] = useState<any>(recentActivity);

  useEffect(() => {
    fetch('/api/recentDeals/', {
      method: 'POST',
      body: JSON.stringify({
        limit: !showActivityFeedButton ? 10 : 5,
        state: location?.state === 'National' ? '' : location?.state,
      }),
    })
      .then((res) => res.json())
      .then((res) => setRecentDeals(getRecentActivity(res?.data?.recentDeal)));
  }, [location]);

  const handleChangeLocation = (e: SelectChangeEvent<unknown>) => {
    const newState = e.target.value as string;

    const newLocation = coveredLocations.find(
      (l) => l.state === newState
    ) as CoveredLocation;

    setLocation(newLocation);
  };

  const TableHeader = ({ tableType }: { tableType: TransactionTypes }) => {
    const tableTypeToProp: Record<TransactionTypes, keyof IRecentActivity> = {
      Lease: 'recentLeases',
      Loan: 'recentLoans',
      Sale: 'recentSales',
    };

    const row = recentDeals[tableTypeToProp[tableType]];

    const transactionType = toStartCase(tableType);

    const lastSaleTime = moment(row[0]?.dealDate).fromNow();

    return (
      <S.TableHeader>
        <Typography variant="h4">Recent {transactionType}s</Typography>
        <Typography variant="text">
          Last {transactionType}: {lastSaleTime}
        </Typography>
      </S.TableHeader>
    );
  };

  return (
    <S.RecentActivityWrapper>
      <Box position="absolute" top={0}>
        <Image
          src="/assets/Shapes/Art.webp"
          width={400}
          height={250}
          alt="Shape"
        />
      </Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        margin={!showActivityFeedButton ? '50px auto' : ''}
        position="relative"
      >
        <SelectLocation
          showLocationIcon
          value={location}
          onChange={handleChangeLocation}
        />
      </Box>
      {showActivityFeedButton && (
        <Button variant="neon-green" href="/activity" sx={{ height: 50 }}>
          <Typography variant="h4" component="p">
            View Activity Feed
          </Typography>
        </Button>
      )}

      <S.ActivityTablesContainer>
        <S.ActivityTableWrapper>
          <TableHeader tableType="Sale" />
          <Table
            columns={activityPageTableColumns}
            rows={recentDeals?.recentSales}
          />
        </S.ActivityTableWrapper>
        <S.ActivityTableWrapper>
          <TableHeader tableType="Loan" />
          <Table
            columns={activityPageTableColumns}
            rows={recentDeals?.recentLoans}
          />
        </S.ActivityTableWrapper>
        <S.ActivityTableWrapper>
          <TableHeader tableType="Lease" />
          <Table
            columns={activityPageTableColumns}
            rows={recentDeals?.recentLeases}
          />
        </S.ActivityTableWrapper>
      </S.ActivityTablesContainer>
    </S.RecentActivityWrapper>
  );
};

export { RecentActivity };
