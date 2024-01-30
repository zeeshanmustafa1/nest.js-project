import styled from '@emotion/styled';

export const AgencySliderWrapper = styled.article`
  width: 80%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 20px auto 60px auto;

  text-align: center;
  background-color: ${({ theme }) => theme.palette.secondary.lighter};

  .slick-slider {
    width: 100%;
    max-width: 1100px;

    margin: 0 auto;

    .slick-track div > div {
      margin: 10px;
    }
  }
`;
