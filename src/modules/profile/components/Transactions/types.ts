import type { SelectChangeEvent } from '@mui/material';

import type { Deal } from '@/__generated__/types.d';

export type SortOption =
  | 'most-recent'
  | 'Date-Old to New'
  | 'Date-New to Old'
  | 'Price-High to Low'
  | 'Price-Low to High';

export type FilterFields = 'asset-class' | 'location' | 'type';

export type FilterReducerAction = {
  field: FilterFields;
  value: string | string[];
};

export type FilterReducerState = Record<FilterFields, string | string[] | null>;

export interface TransactionsFilterProps {
  filterValues: FilterReducerState | any;
  onChangeSelect: (e: SelectChangeEvent<string | string[]>) => void;
  setDeals: Function;
  allDeals: Deal[];
  assetTypesValues: string[] | null | undefined;
  transactionTypesValues: string[] | null;
  stateTypesValues: string[] | null;
}

export interface TransactionsCountProps {
  amount: number;
  itemsPerPage: number;
}

export interface TransactionsSortingProps {
  sortBy: SortOption;
  onChangeSorting: (e: SelectChangeEvent<SortOption>) => void;
}

export interface TransactionCardProps {
  deal: Partial<Deal>;
  loading: boolean | null;
}
