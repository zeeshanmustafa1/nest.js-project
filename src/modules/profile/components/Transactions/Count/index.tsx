import { Typography } from '@mui/material';

import { Label } from '../styles';
import type { TransactionsCountProps } from '../types';
import * as S from './styles';

export const TransactionsCount: React.FC<TransactionsCountProps> = ({
  amount,
  itemsPerPage,
}) => {
  return (
    <S.TransactionsCount>
      <Label>Showing</Label>
      <Typography variant="bodyLarge" component="p">
        {itemsPerPage} of {amount}
      </Typography>
    </S.TransactionsCount>
  );
};
