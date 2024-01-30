import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { IconButton, Pagination, Skeleton } from '@mui/material';
import type { FC } from 'react';
import { useEffect, useReducer, useRef, useState } from 'react';

import type { Deal, Maybe } from '@/__generated__/types.d';
import { getMapBoxDataForDeals } from '@/utils/data/dealsMapBox';

// import { mockRecentActivity } from '@/constants/mocks';
import { ProfileSectionContainer } from '../../styles';
import type { ProfileSectionProps } from '../../types';
import { MapBox } from '../MapBox';
import { ProfileSectionTitle } from '../SectionTitle';
import { TransactionCard } from './Card';
import { TransactionsCount } from './Count';
import { TransactionsFilter } from './Filtering';
import { TransactionsSorting } from './Sorting';
import * as S from './styles';
import type {
  FilterFields,
  SortOption,
  TransactionsFilterProps,
  TransactionsSortingProps,
} from './types';
import {
  defaultFilterValues,
  defaultSortByValue,
  filterReducer,
} from './utils';

export interface ProfileTransactionProps extends ProfileSectionProps {
  comparables?: Deal[];
  extraTitleInfo?: string;
}

export const ProfileTransactions: FC<ProfileTransactionProps> = ({
  broker,
  agency,
  comparables,
  extraTitleInfo,
  dealsCount,
  slug,
  agencyType,
}) => {
  const allDeals = broker?.deals || agency?.deals || comparables;
  const [deals, setDeals] = useState<Maybe<Deal[]> | undefined>();
  const [page, setPage] = useState<number>(1);
  const [totalDeals, setTotalDeals] = useState<number | undefined>(dealsCount);
  const [currentDeals, setCurrentDeals] = useState<Deal[] | undefined>(
    allDeals?.slice(0, 4)
  );
  const [filterValues, dispatchFilterChange] = useReducer(
    filterReducer,
    defaultFilterValues
  );
  let url = '';
  if (agency) {
    url = '/api/companyTransactions';
  } else if (broker) {
    url = '/api/brokerTransactions';
  } else if (comparables) {
    url = '/api/dealComparables';
  }
  const [loading, setLoading] = useState(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef<any>(null);
  const [sortBy, setSortBy] = useState<SortOption>(defaultSortByValue);
  async function getDeals() {
    setLoading(true);
    await fetch(`${url}/${slug}/`, {
      method: 'POST',
      body: JSON.stringify({
        limit: 4,
        page,
        sortBy: sortBy === 'most-recent' ? 'Date-New to Old' : sortBy,
        companyType: agencyType,
        type:
          filterValues?.type === 'Select Type'
            ? null
            : (filterValues.type as String),
        area:
          filterValues.location === 'National'
            ? null
            : (filterValues.location as String),
        assetClass: filterValues?.['asset-class'],
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setCurrentDeals(
          res.data.brokerTransactions ||
            res.data.companyTransactions ||
            res.data.dealComparables
        );
        if (broker) {
          setTotalDeals(res.data?.brokerTransactions[0]?.totalDeals);
        } else if (agency) {
          setTotalDeals(res.data?.companyTransactions[0]?.totalDeals);
        } else if (comparables) {
          setTotalDeals(res.data?.dealComparables[0]?.totalDeals);
        }
      })
      .then(() => setLoading(false));
  }
  let wWidth = 0;
  if (typeof window !== 'undefined') {
    wWidth = window.innerWidth;
  }
  const onChangeSorting: TransactionsSortingProps['onChangeSorting'] = (e) => {
    setSortBy(e.target.value as SortOption);
  };

  const onChangeFilterSelect: TransactionsFilterProps['onChangeSelect'] = (
    e
  ) => {
    dispatchFilterChange({
      field: e.target.name as FilterFields,
      value: e.target.value,
    });
  };
  // useEffect(() => {
  //   // const offset = page * 4;
  //   // const start = offset - 4;
  //   // setCurrentDeals(deals?.slice(start, offset));
  //   console.log('page');
  // }, [page]);

  useEffect(() => {
    // setPage(1);
    // setCurrentDeals(deals?.slice(0, 4));
  }, [deals]);

  useEffect(() => {
    setPage(1);
    getDeals();
  }, [filterValues]);

  useEffect(() => {
    // setDeals(sortByHelper(allDeals as Deal[], sortBy));
    setPage(1);
    getDeals();
  }, [sortBy]);
  useEffect(() => {
    setHeight(ref.current?.clientHeight);
    setWidth(ref.current?.clientWidth);
  }, [currentDeals, wWidth]);
  useEffect(() => {
    getDeals();
  }, [page]);
  return (
    <ProfileSectionContainer>
      <ProfileSectionTitle
        sectionName={comparables ? 'Comparables' : 'Transactions'}
        extraInfo={extraTitleInfo}
      />

      <S.FiltersAndSortingContainer>
        <TransactionsFilter
          filterValues={filterValues}
          onChangeSelect={onChangeFilterSelect}
          assetTypesValues={
            broker?.assetTypesDropdown || agency?.assetTypesDropdown || []
          }
          transactionTypesValues={
            broker?.transactionTypesDropdown ||
            agency?.transactionTypesDropdown ||
            []
          }
          stateTypesValues={
            broker?.stateTypesDropdown || agency?.stateTypesDropdown || []
          }
          allDeals={currentDeals as Deal[]}
          setDeals={setDeals}
        />
        <TransactionsSorting
          sortBy={sortBy}
          onChangeSorting={onChangeSorting}
        />

        <TransactionsCount
          amount={totalDeals || 0}
          itemsPerPage={page * 4 - 3}
        />
      </S.FiltersAndSortingContainer>

      <S.TransactionsContainer>
        <S.TransactionsAndMapContainer>
          <S.TransactionsWrapper ref={ref}>
            {currentDeals?.map((deal, index) => (
              <TransactionCard
                key={`${deal.id}-${index}`}
                deal={deal}
                loading={loading}
              />
            ))}
          </S.TransactionsWrapper>
          {height && (
            <S.MapWrapper height={`${height.toString()}px`}>
              {loading ? (
                <Skeleton
                  variant="rectangular"
                  width={width}
                  height={wWidth > 875 ? height : 250}
                  animation="wave"
                />
              ) : (
                <MapBox data={getMapBoxDataForDeals(currentDeals as Deal[])} />
              )}
            </S.MapWrapper>
          )}
        </S.TransactionsAndMapContainer>
        <S.TransactionsPaginationWrapper>
          <IconButton
            disabled={page === 1}
            onClick={() => page >= 1 && setPage(page - 1)}
          >
            <NavigateBefore />
          </IconButton>
          <Pagination
            count={Math.ceil((totalDeals as number) / 4)}
            hidePrevButton
            hideNextButton
            siblingCount={2}
            page={page}
            onChange={(_, p) => {
              setPage(p);
            }}
          />
          <IconButton
            disabled={
              page === (totalDeals ? Math.ceil((totalDeals as number) / 4) : 0)
            }
            onClick={() =>
              page <= (Math.ceil(totalDeals as number) || 0) &&
              setPage(page + 1)
            }
          >
            <NavigateNext />
          </IconButton>
        </S.TransactionsPaginationWrapper>
      </S.TransactionsContainer>
    </ProfileSectionContainer>
  );
};
