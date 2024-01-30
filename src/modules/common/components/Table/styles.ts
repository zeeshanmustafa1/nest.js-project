import styled from '@emotion/styled';
import { TableRow as MuiTableRow } from '@mui/material';

export const MultipleImagesCell = styled.div`
  height: 100%;

  display: flex;
  align-items: flex-start;

  gap: 10px;

  table.table-small & {
    gap: 5px;
  }

  .MuiAvatar-square {
    height: 60px;
    width: 60px;
  }
`;

export const ImageWrapper = styled.figure`
  width: 100%;
  max-width: 100px;
  min-width: 1000px;

  height: 100%;
  max-height: 100px;
  min-height: 100px;
  min-width: 100px;
  margin: 0;
`;

export const TableRow = styled(MuiTableRow)`
  &:last-child {
    td,
    th {
      border-bottom: 1px solid;
    }
  }

  table.table-small & {
    .agency-photo,
    .broker-avatar,
    .broker-avatar > div {
      width: 30px;
      height: 30px;
      max-width: 30px;
      min-width: 30px;
      max-height: 30px;
      min-height: 30px;
      padding: 0;
    }

    .MuiTypography-h4 {
      font-size: 14px;
      line-height: 14px;
    }

    .MuiTypography-text {
      font-size: 14px;
      line-height: 14px;
    }
  }
`;
