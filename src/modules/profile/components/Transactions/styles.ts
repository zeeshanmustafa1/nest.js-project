import styled from '@emotion/styled';
import { InputLabel } from '@mui/material';

export const CommonFilterContainer = styled.section`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FiltersAndSortingContainer = styled.section`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;

  justify-content: space-between;
  padding: 10px 0;
  margin: 10px 0;

  color: ${({ theme }) => theme.palette.secondary.darker};
`;

export const Label = styled(InputLabel)`
  font-style: normal;
  font-weight: 800;
  font-size: 10px;

  line-height: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const TransactionsContainer = styled.main`
  width: 105%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const TransactionsAndMapContainer = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  overflow: hidden;
  @media (max-width: 875px) {
    flex-direction: column-reverse;
    gap: 30px;
  }
`;

export const TransactionsWrapper = styled.ul`
  width: 55%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 15px;

  margin: 0;
  padding: 0;
  list-style-type: none;

  @media (max-width: 1180px) {
    width: 55%;
  }

  @media (max-width: 875px) {
    width: 100%;
  }
`;

export const MapWrapper = styled.div<{ height: string }>`
  width: 43%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  min-height: 60px;
  height: ${(props) => props.height}
  background-color: ${({ theme }) => theme.palette.secondary.dark};

  h1 {
    display: block;
  }

  @media (max-width: 1180px) {
    width: 43%;
  }

  @media (max-width: 875px) {
    width: 100%;
    height: 250px;
  }
  .mapboxgl-canvas {
    min-height: 50px;
    height: ${(props) => props.height} !important;
    @media (max-width: 875px){
      width: 100%;
      height: 250px !important;
    }
  }
  .mapboxgl-map {
    min-height: 50px;
    height: ${(props) => props.height} !important;
    @media (max-width: 875px){
      width: 100%;
      height: 250px !important;
    }
  }
`;

export const TransactionsPaginationWrapper = styled.section`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
