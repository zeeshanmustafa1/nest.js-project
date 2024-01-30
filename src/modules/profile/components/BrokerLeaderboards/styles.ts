import styled from '@emotion/styled';

type BrokerWrapperProps = {
  isCurrentAgent?: boolean;
};
export const LeaderBoardText = styled.section`
  margin-bottom: 80px;
  display: block;
  -webkit-box-pack: justify;
`;
export const BrokerLeaderBoardWrapper = styled.div`
  .slick-list {
    z-index: 1;
  }

  .slick-slide > div {
    padding: 20px;
  }

  .slick-dots {
    bottom: 0;
    top: -30px;
  }

  .slick-dots > li > button {
    &:before {
      font-size: 15px;
    }
  }
`;

export const BrokerListWrapper = styled.div`
  padding: 20px 20px 28px 32px;
  background-color: ${({ theme }) => theme.palette.secondary.lighter};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.palette.grey['100']};
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

export const BrokerList = styled.ul``;

export const BrokerWrapper = styled.li<BrokerWrapperProps>`
  display: flex;
  margin-bottom: 10px;
  padding: 10px 10px 10px 10px;

  ${({ isCurrentAgent }) =>
    isCurrentAgent &&
    `background: #f0f0f0;
  border: 1px solid #202124;
  box-sizing: border-box;
  border-radius: 8px;`}
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

export const Title = styled.div`
  display: flex;

  .MuiTypography-h4 {
    display: flex;
    align-items: center;
  }
`;
