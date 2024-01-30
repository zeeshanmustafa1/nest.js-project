import styled from '@emotion/styled';

import { CommonFilterContainer } from '../styles';

export const SortingContainer = styled(CommonFilterContainer)`
  flex: 0 0 25%;
  max-width: 25%;

  border-left: 1px solid ${({ theme }) => theme.palette.secondary.dark};

  & > .MuiFormControl-root {
    margin-left: 15px;
  }
`;
