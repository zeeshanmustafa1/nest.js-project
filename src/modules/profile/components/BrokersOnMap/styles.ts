import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const MapAndContentWrapper = styled(Box)`
  position: relative;
  height: 400px;
  margin: 0 auto;

  .gmnoprint a,
  .gmnoprint span {
    display: none;
  }
  .gmnoprint div,
  .gm-style-cc div {
    display: none !important;
  }

  .gm-style > div > div > a > div > img {
    display: none;
  }
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const LogoContentBrokersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-self: flex-end;
  background-color: ${({ theme }) => theme.palette.secondary.lighter};
`;

export const ContentBrokersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 16px 16px;
`;

export const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.lighter};
  opacity: 0.8;
  padding: 0 24px;
`;
