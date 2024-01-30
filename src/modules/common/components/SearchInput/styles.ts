import styled from '@emotion/styled';

export const SuggestionBoxWrapper = styled.li`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  padding: 10px 5px;

  overflow: hidden;

  .MuiTypography-bodySmall {
    color: ${({ theme }) => theme.palette.success.main};
    font-weight: bold;
  }
`;

export const SuggestionContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-self: flex-start;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
`;

export const StatListTitle = styled.p`
  font-size: 12px;
  margin: 0;
`;

export const StatListValue = styled.p`
  font-size: 12px;
  font-weight: 800;
  margin: 0;
  margin-left: 2px;
`;

export const StatItem = styled.div`
  display: flex;
`;

export const DealSuggestionDetail = styled.div``;

export const StyledLink = styled.a`
  text-decoration: none;
  color: black;
`;
