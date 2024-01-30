import styled from '@emotion/styled';

export const SocialMediaLinksContainer = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-top: 10px;
`;

export const StyledLink = styled.a`
  width: 36px;
  height: 36px;

  text-decoration: none;
  cursor: pointer;

  padding: 2px;
  border-radius: 16px;

  color: black;

  &:hover {
    background-color: #e3e3e3;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  &:visited {
    color: black;
    text-decoration: none;
  }
`;
