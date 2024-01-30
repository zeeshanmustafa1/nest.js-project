import {
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from '@mui/material';
import __ from 'lodash';
import { useMemo } from 'react';

import * as S from './styles';
import { buildRows } from './table-builder';

const commonHeaderByDataKey: Record<keyof TablePossibleEntities, string> = {
  imageUrl: 'Image',
  dealDate: 'Deal Date',
  agents: 'Agents',
  agencies: 'Agencies',
  address: 'Address',
  state: 'State',
  price: 'Price',
  ppsf: 'PPSF',
  sf: 'SF',
  asset: 'Asset',
  logoUrl: 'Image',
  position: 'Rank',
  thumbnail: 'Image',
  type: 'Type',
  id: 'Identifier',
  name: 'Name',
  volume: 'Volume',
  sales: 'Sales',
  loans: 'Loans',
  lease: 'Lease',
  closed: 'Closed',
  area: 'Area',
};

const Table: React.FC<TradedTableProps> = ({
  rows,
  columns,
  small = false,
}) => {
  const { tableColumns } = useMemo(() => {
    const partialColumns = __.map(columns, (col) => {
      if (!col.header) {
        const header = commonHeaderByDataKey[col.dataKey];
        // eslint-disable-next-line no-param-reassign, @typescript-eslint/dot-notation
        col.header = header;
      }

      return col;
    });

    const orderedColumns = __.orderBy(partialColumns, ['sortOrder']);

    return {
      tableColumns: orderedColumns,
    } as const;
  }, [columns]);

  const tableRows = useMemo(() => {
    if (!tableColumns || !rows) {
      return null;
    }

    const columnKeys = tableColumns.map((col) => col.dataKey);

    return buildRows(rows, columnKeys);
  }, [rows, tableColumns]);

  if (!tableRows || !tableColumns) {
    return <></>;
  }

  const size = small ? 'small' : 'medium';
  const className = small ? 'table-small' : '';

  return (
    <TableContainer component={Paper}>
      <MuiTable size={size} className={className}>
        <TableHead>
          <S.TableRow>
            {tableColumns.map(({ dataKey, header }) => (
              <TableCell component="th" key={dataKey as string}>
                {header}
              </TableCell>
            ))}
          </S.TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((row) => (
            <S.TableRow key={row.id}>
              {row.values.map(({ dataKey, value }) => (
                <TableCell key={dataKey} component="td" scope="row">
                  {value}
                </TableCell>
              ))}
            </S.TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export { Table };
