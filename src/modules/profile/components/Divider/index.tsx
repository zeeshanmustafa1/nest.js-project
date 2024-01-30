import styled from '@emotion/styled';
import type { DividerProps } from '@mui/material';
import { Divider as MuiDivider } from '@mui/material';

const StyledDivider = styled(MuiDivider)`
  margin: 10px 0 20px 0;
`;

export const Divider: React.FC<DividerProps> = (props) => (
  <StyledDivider {...props} />
);
