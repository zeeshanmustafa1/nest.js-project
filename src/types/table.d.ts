interface Column {
  header?: string;
  dataKey: keyof TablePossibleEntities;
  sortOrder: number;
}

interface Row {
  id: string;
  values: {
    dataKey: string;
    value: React.ReactNode | JSX.Element;
  }[];
}

type TablePossibleEntities = Partial<Deal & Rank<Deal>>;

type TableColumnKeys = Array<keyof TablePossibleEntities>;

type TableRows = Array<TablePossibleEntities>;

interface TradedTableProps {
  rows: TableRows;
  columns: Column[];
  small?: boolean;
}
