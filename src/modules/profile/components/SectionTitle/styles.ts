import styled from '@emotion/styled';

export const ProfileSectionTitleContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ProfileSectionTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 10px;

  .MuiTypography-h1 {
    margin-top: 8px;
  }

  @media (max-width: 550px) {
    .MuiTypography-h2 {
      font-size: 28px;
      line-height: 28px;
    }
  }

  @media (max-width: 310px) {
    .MuiTypography-h2 {
      font-size: 24px;
      line-height: 24px;
    }
  }
`;

export const ProfileSectionIcon = styled.figure`
  width: 100%;
  max-width: 60px;
  min-width: 60px;

  height: 100%;
  max-height: 60px;
  min-height: 60px;

  margin: 0;

  @media (max-width: 500px) {
    max-width: 40px;
    min-width: 40px;

    max-height: 40px;
    min-height: 40px;
  }
`;
