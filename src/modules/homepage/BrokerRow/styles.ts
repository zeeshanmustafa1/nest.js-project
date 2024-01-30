import styled from '@emotion/styled';

export const BrokersRowWrapper = styled.article`
  min-width: 100%;
  height: 270px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      91.1deg,
      rgba(68, 142, 101, 0.1) -4.52%,
      rgba(195, 215, 255, 0.023) 93.94%
    ),
    ${({ theme }) => theme.palette.secondary.main};
`;

export const BrokersRowContainer = styled.section`
  width: 100%;
  height: 100%;

  max-width: 1200px;

  padding: 10px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 1281px) {
    overflow-x: scroll;
  }
`;

export const BrokersListWrapper = styled.main`
  width: 100%;
  height: 80%;

  padding: 8px 12px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background: linear-gradient(
    92.28deg,
    #ffffff 2.87%,
    rgba(255, 255, 255, 0.53) 71.42%
  );
  border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  border-radius: 8px;
`;

export const BrokerListHeader = styled.section`
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;

  margin-top: 10px;

  .MuiTypography-h4 {
    display: flex;
    align-items: center;
    gap: 10px;
    max-height: 60px;
    font-size: 20px;
  }

  p {
    margin: 0;
  }
`;

export const BrokersAvatars = styled.nav`
  width: 100%;

  display: flex;
  flex-wrap: nowrap;
  gap: 5px;

  & > a {
    flex: 1;

    width: calc(100% / 5);
    height: 100%;
    max-width: 100%;

    max-height: 60px;
    min-width: 60px;
    min-height: 60px;

    @media (max-width: 435px) {
      &:nth-of-type(4) {
        display: none;
      }
    }

    @media (max-width: 360px) {
      min-width: 50px;
    }
  }
`;
