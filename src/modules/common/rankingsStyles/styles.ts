import styled from '@emotion/styled';
import { List, ListItem } from '@mui/material';

import theme from '@/theme';

export const ProfileMenuNavWrapper = styled(List)`
  width: 100%;
  top: 0;
  z-index: 5;
  gap: 5px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: initial;

  padding: 5px 20px;
  margin-bottom: 20px;
  overflow-x: visible;
`;

export const ProfileMenuSectionLink = styled(ListItem)<{ isactive: boolean }>`
  background-color: ${(props) =>
    props.isactive
      ? theme.palette.secondary.light
      : theme.palette.secondary.light};
  width: 100%;

  padding: 12px;
  margin: 4px 0;
  cursor: pointer;

  border-bottom: ${(props) => props.isactive && '4px solid black'};

  flex: 0 0 25%;

  margin: 0;
  flex-flow: column;
  white-space: nowrap;
`;
