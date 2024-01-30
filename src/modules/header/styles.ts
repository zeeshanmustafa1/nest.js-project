import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 90px;

  // padding: 15px 20px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  // align-items: center;
  justify-content: center;

  box-shadow: 0 1px 0px ${({ theme }) => theme.palette.grey[100]};

  @media (max-width: 1050px) {
    .MuiAutocomplete-root {
      display: none;
    }
  }
`;

export const HeaderContent = styled.article`
  width: 90%;
  // max-width: 1440px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    list-style: none;
  }

  @media (max-width: 1150px) {
    width: 95%;
  }
`;

export const HeaderMenuWrapper = styled.section`
  display: flex;

  gap: 15px;
`;

export const DisableOnTablet = styled.div`
  @media (max-width: 1050px) {
    display: none;
  }
`;

export const HeaderLinksWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  transition: all 0.5s;

  list-style: none;

  a {
    display: flex;
    gap: 5px;

    text-decoration: none;

    &,
    &:visited,
    &:active {
      color: ${({ theme }) => theme.palette.grey[700]};
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const HeaderLinkWrapper = styled.div`
  position: relative;
  display: inline-block;
  transition: all 0.5s;

  &:hover {
    > ul {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const HeaderSubLinkWrapper = styled.ul`
  opacity: 0;
  visibility: hidden;
  top: 100%;
  position: absolute;
  padding: 0px;
  margin: 0px;
  z-index: 2;
  liststyletype: none;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  background-color: rgba(255, 255, 255, 0.95);
  transition: all 0.5s;
`;

export const HeaderInnerSubLinkWrapper = styled.ul`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 100%;
  padding: 0px;
  margin: 0px;
  z-index: 2;
  left: 100%;
  top: 0;
  liststyletype: none;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  background-color: rgba(255, 255, 255, 0.95);
  transition: all 0.5s;
`;

export const HeaderSubLinkListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid #dce0e0;
  transition: all 0.5s;
  position: relative;

  a {
    &:hover {
      text-decoration: none;
      color: #00aeff;
    }
  }

  &:hover {
    > ul {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const HeaderInnerSubLinkListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid #dce0e0;
  transition: all 0.5s;

  a {
    &:hover {
      text-decoration: none;
      color: #00aeff;
    }
  }
`;

export const HeaderSubLink = styled.a`
  position: relative;
  font-weight: 600;
  font-size: 14px;
  min-width: 250px;
  padding: 15px 15px 15px 5px;
`;

export const HeaderMenuIcon = styled.button`
  padding: 8px;

  background-color: transparent;
  cursor: pointer;

  border: 0;
  outline: 0;

  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const StyleLink = styled.link`
  text-decoration: none;
  color: orange;
`;
