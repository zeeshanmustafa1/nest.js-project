import styled from '@emotion/styled';
import { Select as MuiSelect } from '@mui/material';

export const Select = styled(MuiSelect)`
  width: 100%;
  max-width: 250px;
  padding: 15px 20px;
  border-radius: 20px;
  background-color: white;
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  font-size: 20px;
  font-weight: 500;
`;
