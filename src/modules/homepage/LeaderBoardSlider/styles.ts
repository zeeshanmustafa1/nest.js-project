import styled from '@emotion/styled';

export const LeadershipWrapper = styled.div`
  width: 100%;

  padding: 80px 100px;
  max-width: 1500px;

  @media only screen and (max-width: 550px) {
    padding: 50px 10px;
  }

  .slick-list {
    z-index: 1;
  }

  .slick-slide > div {
    padding: 20px;
  }

  .slick-dots {
    bottom: 0;
    top: -65px;
  }

  .slick-dots > li > button {
    &:before {
      font-size: 17px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 120px;
`;

export const BrokerListWrapper = styled.div`
  padding: 20px 20px 28px 32px;
  background-color: ${({ theme }) => theme.palette.secondary.lighter};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.palette.grey['100']};
  max-width: 488px;
`;
export const BrokerListHeader = styled.div`
  display: flex;
  margin-bottom: 26px;
  justify-content: space-between;
`;
export const BrokerListHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  margin-bottom: 8px;
`;
export const BrokerListExternalLinkImage = styled.div``;
export const BrokerList = styled.div``;
export const BrokerWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;
export const BrokerNumber = styled.div`
  width: 50px;
`;
export const BrokerDetail = styled.div`
  display: flex;
  a {
    width: 100%;
    max-width: 70px;
    max-height: 70px;
    min-width: 70px;
    min-height: 70px;
  }
`;
export const BrokerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
`;
export const BrokerNameGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BrokerEarning = styled.div`
  display: flex;
  align-items: center;
`;
export const BrokerEarningPercentage = styled.div`
  display: flex;
  margin-left: 8px;
  .MuiTypography-bodyLarge {
    font-size: 10px;
    color: ${({ theme }) => theme.palette.green.main};
  }
`;
export const Title = styled.div`
  display: flex;

  .MuiTypography-h4 {
    display: flex;
    align-items: center;
  }
`;
export const MainDiv = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${({ theme }) => theme.palette.secondary.light};
`;
