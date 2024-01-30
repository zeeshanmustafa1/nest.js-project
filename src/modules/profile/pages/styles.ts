import styled from '@emotion/styled';

export const ProfilePage = styled.main`
  width: 100%;
  max-width: 1200px;
  min-height: 100%;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 50px 10px;
`;

export const ProfileSections = styled.article`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 30px;

  border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  // border-top: none;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    justify-content: flex-start;

    padding: 0 10px;
  }
`;

export const ProfileSectionsContainer = styled.main`
  width: 75%;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const ProfileSectionRefContainer = styled.div``;
