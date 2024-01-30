import styled from '@emotion/styled';

import { CommonFilterContainer } from '../styles';

export const FiltersContainer = styled(CommonFilterContainer)`
  flex: 0 0 60%;
  max-width: 60%;

  & > .MuiFormControl-root {
    padding-right: 15px;
  }
`;

export const FilterItem = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
