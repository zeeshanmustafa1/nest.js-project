import styled from '@emotion/styled';

export const LeaderboardHighlightsWrapper = styled.section`
  width: 100%;
  max-width: 650px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding-bottom: 10px;

  @media (max-width: 600px) {
    display: none;
  }
`;
