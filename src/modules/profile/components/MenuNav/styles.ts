import styled from '@emotion/styled';
import { List, ListItem } from '@mui/material';

export const ProfileMenuNavWrapper = styled(List)`
  width: 20%;
  height: 100%;

  position: sticky;

  background-color: ${({ theme }) => theme.palette.secondary.lighter};

  @media (max-width: 1100px) {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 5;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: initial;

    padding: 5px 20px;
    margin-bottom: 20px;
    overflow-x: scroll;

    border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  }
`;

export const ProfileMenuSectionLink = styled(ListItem)`
  width: 100%;

  padding: 12px;
  margin: 4px 0;

  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }

  @media (max-width: 1100px) {
    flex: 0 0 25%;

    margin: 0;
    flex-flow: column;
    white-space: nowrap;
  }
`;
