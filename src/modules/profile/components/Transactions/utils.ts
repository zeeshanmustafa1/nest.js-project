import type { Deal } from '@/__generated__/types.d';
import {
  assetClassTypes,
  coveredLocations,
  sortByOptions,
  transactionTypes,
} from '@/constants';

import type {
  FilterReducerAction,
  FilterReducerState,
  SortOption,
} from './types';

export const filterReducer: React.Reducer<
  FilterReducerState,
  FilterReducerAction
> = (state, action) => {
  const prevValues = state;

  const { field, value } = action;

  // ensure at least one asset-class is selected
  if (field === 'asset-class') {
    if (prevValues['asset-class']?.length === 1 && value.length === 0) {
      return prevValues;
    }
  }

  return {
    ...prevValues,
    [field]: value || prevValues[field],
  };
};

export const defaultSortByValue = sortByOptions[0]?.type as SortOption;

export const defaultFilterValues: FilterReducerState = {
  'asset-class': [assetClassTypes[0]?.label] as string[],
  type: transactionTypes[0]?.label as string,
  location: coveredLocations[0]?.state as string,
};

export const sortByHelper = (allDeals: Deal[], sortBy: SortOption) => {
  const distantFuture = new Date(8640000000000000);
  const distantPast = new Date(0);
  switch (sortBy) {
    case 'most-recent':
      return [...(allDeals as Deal[])]?.sort((a, b) => {
        const dateA = a.closingDate ? new Date(a.closingDate) : distantPast;
        const dateB = b.closingDate ? new Date(b.closingDate) : distantPast;
        return dateB.getTime() - dateA.getTime();
      });
    case 'Date-Old to New':
      return [...(allDeals as Deal[])]?.sort((a, b) => {
        const dateA = a.closingDate ? new Date(a.closingDate) : distantFuture;
        const dateB = b.closingDate ? new Date(b.closingDate) : distantFuture;
        return dateA.getTime() - dateB.getTime();
      });

    case 'Date-New to Old':
      return [...(allDeals as Deal[])]?.sort((a, b) => {
        const dateA = a.closingDate ? new Date(a.closingDate) : distantPast;
        const dateB = b.closingDate ? new Date(b.closingDate) : distantPast;
        return dateB.getTime() - dateA.getTime();
      });

    case 'Price-Low to High':
      return [...(allDeals as Deal[])]?.sort((a, b) => {
        const numA = a.salePrice ? parseInt(a.salePrice, 10) : Number.MAX_VALUE;
        const numB = b.salePrice ? parseInt(b.salePrice, 10) : Number.MAX_VALUE;
        return numA - numB;
      });

    case 'Price-High to Low':
      return [...(allDeals as Deal[])]?.sort((a, b) => {
        const numA = a.salePrice ? parseInt(a.salePrice, 10) : -1;
        const numB = b.salePrice ? parseInt(b.salePrice, 10) : -1;
        return numB - numA;
      });

    default:
      return [...(allDeals as Deal[])];
  }
};
