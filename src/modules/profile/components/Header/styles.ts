import styled from '@emotion/styled';

export const ProfileHeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;

  z-index: 1;

  text-align: center;

  .MuiTypography-h1 {
    margin-bottom: 15px;
  }

  .MuiTypography-bodyLarge {
    color: ${({ theme }) => theme.palette.grey[500]};
    font-style: italic;
  }
`;

export const AgentHeaderContactWrapper = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 20px 0;

  .MuiTypography-bodyExtraLarge {
    font-weight: 500;
  }
`;

export const PictureWrapper = styled.div`
  max-width: 100%;
  padding-bottom: 10px;
  justify-content: center;
  @media (min-width: 600px) {
    display: none;
  }
`;
