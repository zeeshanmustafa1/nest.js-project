import styled from '@emotion/styled';

export const StatsSummaryContainer = styled.article`
  width: 100%;
  height: 140px;

  top: 0;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 0;

  border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  border-bottom: none;
  background-color: ${({ theme }) => theme.palette.secondary.lighter};

  @media (max-width: 875px) {
    height: 90px;
    justify-content: center;

    padding: 5px 10px;
  }

  @media (max-width: 600px) {
    height: 80px;
    padding: 5px 0;
  }
`;

export const StatSummary = styled.section`
  max-width: 17%;

  display: flex;
  flex: 0 0 20%;
  flex-direction: column;
  justify-content: center;

  text-align: center;

  &:not(:last-of-type) {
    border-right: 1px solid ${({ theme }) => theme.palette.secondary.main};
  }

  .MuiTypography-h2 {
    margin-bottom: 15px;
  }

  .MuiTypography-bodySmall {
    font-weight: 500;
    line-height: 10px;
  }

  @media (max-width: 875px) {
    flex: 0 0 33.33%;

    padding: 0 10px 0 10px;

    &:nth-of-type(n + 4) {
      margin: 5px 0;
    }

    .MuiTypography-h2 {
      margin-bottom: 0;

      font-size: 24px;
      line-height: 24px;
    }
  }

  @media (max-width: 800px) {
    padding: 0 5px 0 5px;

    .MuiTypography-h2 {
      font-size: 22px;
      line-height: 20px;
    }

    .MuiTypography-bodySmall {
      font-size: 10px;
      line-height: 8px;
    }
  }
  @media (max-width: 500px) {
    padding: 0 5px 0 5px;

    .MuiTypography-h2 {
      font-size: 16px;
      line-height: 17px;
    }

    .MuiTypography-bodySmall {
      font-size: 8px;
      line-height: 8px;
    }
  }
`;
