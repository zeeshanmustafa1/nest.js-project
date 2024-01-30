import styled from '@emotion/styled';
import { Drawer as MuiDrawer } from '@mui/material';

export const Drawer = styled(MuiDrawer)`
  .MuiPaper-root {
    positiion: relative;
    width: 100%;
    height: 100vh;
    max-width: 800px;

    overflow: hidden;

    @media (max-width: 960px) {
      width: 80%;
    }

    @media (max-width: 400px) {
      max-width: 80%;
    }
  }

  @media (max-width: 960px) {
    .MuiPaper-root {
      min-width: 80%;
    }
  }
`;

export const DrawerContent = styled.aside`
  width: 100%;
  height: 70%;

  padding: 10% 20%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;

  background-color: ${({ theme }) => theme.palette.primary.darker};
  nav {
    margin-top: 20px;

    list-style: none;
    color: ${({ theme }) => theme.palette.secondary.lighter};
  }

  @media (max-width: 400px) {
    padding: 10% 10%;
  }
`;

export const DrawerFooter = styled.footer`
  width: 100%;
  height: 30%;
  max-height: 370px;

  padding: 12% 10%;

  color: ${({ theme }) => theme.palette.secondary.lighter};
  background-color: ${({ theme }) => theme.palette.black.main};
`;
