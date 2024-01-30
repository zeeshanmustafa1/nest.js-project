import styled from '@emotion/styled';

export const DealInfoContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  border-radius: 8px;

  a {
    color: ${({ theme }) => theme.palette.black.main};
  }
`;

export const DealInfoStats = styled.ul`
  list-style: none;
  padding: 0;
`;

export const DealInfoStat = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  padding: 10px 0;
  white-space: nowrap;
`;

export const DealInfoStatTitle = styled.div`
  flex: 0 0 15%;
  color: ${({ theme }) => theme.palette.grey[500]};
`;

export const DealInfoStatValue = styled.div`
  display: flex;
  margin: 0 12px;
  color: ${({ theme }) => theme.palette.black.main};
  overflow: hidden; // Add this line to hide the overflow
`;

export const DealProfilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 430px) {
    display: block;
  }
`;
export const DealProfileWrapper = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  display: flex;
  margin: 30px 0;
  @media (max-width: 430px) {
    max-width: 100%;
  }
`;

export const DealProfileStatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

export const DealProfileStat = styled.div``;
