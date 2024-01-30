import styled from '@emotion/styled';

export const TableHeader = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 20px;

  margin-bottom: 15px;

  .MuiTypograhy-text {
    display: flex;
    gap: 10px;
    margin-bottom: 2px;

    color: ${({ theme }) => theme.palette.grey[500]};
  }
`;

export const RecentActivityWrapper = styled.article`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .MuiButton-neon-green {
    margin: 60px 0;

    .MuiTypography-h4 {
      color: ${({ theme }) => theme.palette.secondary.lighter};
    }
  }
`;

export const ActivityTablesContainer = styled.main`
  width: 95%;

  max-width: 1440px;
`;

export const ActivityTableWrapper = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-bottom: 50px;
`;
