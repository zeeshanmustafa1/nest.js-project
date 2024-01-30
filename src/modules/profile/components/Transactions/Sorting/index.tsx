import { FormControl, MenuItem, Select } from '@mui/material';

import { sortByOptions } from '@/constants';

import { Label } from '../styles';
import type { TransactionsSortingProps } from '../types';
import * as S from './styles';

export const TransactionsSorting: React.FC<TransactionsSortingProps> = ({
  sortBy,
  onChangeSorting,
}) => {
  return (
    <S.SortingContainer>
      <FormControl variant="standard" fullWidth>
        <Label id="sort-by-label">Sort by</Label>
        <Select
          labelId="sort-by-label"
          value={sortBy}
          onChange={onChangeSorting}
          label="Sort by"
        >
          {sortByOptions.map(({ type, label }) => (
            <MenuItem key={type} value={type}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </S.SortingContainer>
  );
};
