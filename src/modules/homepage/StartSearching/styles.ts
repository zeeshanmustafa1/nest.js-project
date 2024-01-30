import styled from '@emotion/styled';

export const StartSearchingWrapper = styled.article`
  width: 100%;
  height: 90vh;
  max-height: 700px;

  position: relative;
  overflow: hidden;

  padding: 150px 5% 0 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  text-align: center;

  background-color: ${({ theme }) => theme.palette.black.main};

  .start-searching-title {
    z-index: 1;

    display: flex;
    align-items: center;
    gap: 5px;

    padding-top: 10px;

    background-color: ${({ theme }) => theme.palette.black.main};

    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.yellow.main};
  }

  .MuiTypography-h3 {
    color: ${({ theme }) => theme.palette.secondary.lighter};
    margin-top: 30px;
  }

  @media (max-width: 800px) {
    max-height: 600px;
    padding: 70px 5% 0 5%;
  }
`;

export const SearchContainer = styled.main`
  width: 100%;
  max-width: 600px;

  padding: 20px 0;
  margin: 0 auto;
`;

export const SearchWrapper = styled.section`
  position: relative;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.palette.secondary.lighter};

  &:after {
    content: '';

    width: 120px;
    height: 128px;

    position: absolute;
    top: -140%;
    right: -15%;

    background-repeat: no-repeat;
    background: url('/assets/Arrows/ArrowCircularBrushed.svg');

    transform: rotate(-30deg);

    @media (max-width: 815) {
      top: -195%;
      right: -2%;

      transform: rotate(-88deg);
    }
  }
`;

export const ArrowUpWrapper = styled.figure`
  position: absolute;
  top: 70%;

  margin: 0;

  @media (max-width: 800px) {
    top: 65%;
  }
`;
