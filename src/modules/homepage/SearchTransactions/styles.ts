import styled from '@emotion/styled';

export const SearchTransationsWrapper = styled.article`
  width: 100%;
  min-height: 55vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 2% 23%;

  background-color: ${({ theme }) => theme.palette.secondary.light};
  text-align: center;

  .MuiTypography-h4 {
    margin: 40px 0;
    font-weight: 500;
  }

  @media (max-width: 920px) {
    padding: 5% 10%;
  }

  @media (max-width: 500px) {
    padding: 5% 5%;
    min-height: 40vh;
  }
`;

export const SearchInputContainer = styled.section`
  width: 100%;
  max-width: 880px;
  height: 105px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;

  margin: 0 auto;
  padding: 30px;

  background-color: ${({ theme }) => theme.palette.secondary.lighter};
  box-shadow: 0 30px 100px rgba(6, 13, 52, 0.3);

  border-radius: 12px;
  border: 2px solid rgba(0, 0, 0, 0.2);
`;
export const SearchInputParagraphContainer = styled.section`
  @media (max-width: 920px) {
    display: none;
  }
`;

export const BoldHeadingWrapper = styled.div`
  @media (max-width: 920px) {
    padding-bottom: 20px;
  }
`;
