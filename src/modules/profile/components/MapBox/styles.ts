import styled from '@emotion/styled';

export const MapContainer = styled.div`
  height: calc(100vh + 220px);

  @media (max-width: 1180px) {
    height: calc(100vh + 185px);
  }

  @media (max-width: 875px) {
    height: inherit;
  }

  .mapboxgl-ctrl-bottom-right {
    display: none;
  }

  .mapboxgl-popup-content {
    padding: 10px 0px 0px 0px;
  }
`;

export const Marker = styled.button`
  background-color: #11b4da;
  border: 1px solid #11b4da;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 50%;
`;
