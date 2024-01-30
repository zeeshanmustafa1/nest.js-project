import styled from '@emotion/styled';

export const LastDealAndProfilePicWrapper = styled.section`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  overflow: visible;
  position: relative;

  @media (max-width: 1080px) {
    margin-top: 150px;
  }
  @media (max-width: 600px) {
    margin-top: 20px;
  }
  @media (max-width: 430px) {
    margin-top: 0px;
  }
`;

export const LastDeal = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  margin-bottom: 10px;

  .MuiTypography-h5 {
    font-weight: 600;
    font-size: 16px;
    margin-top: 3px;
  }

  @media (max-width: 1024px) {
    .MuiTypography-h5 {
      font-size: 14px;
      margin-top: -5px;
    }
  }
`;

export const LinkToLastDeal = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;

  .MuiTypography-h4 {
    font-weight: 900;
    font-size: 16px;
    letter-spacing: 0.1em;
  }

  @media (max-width: 1024px) {
    .MuiTypography-h4 {
      font-size: 14px;
    }
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const PictureWrapper = styled.section<{
  pictureUrl: string;
  size: number;
  isStaticImage?: boolean;
}>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  position: absolute;
  right: 0;

  background: ${({ pictureUrl }) => `url(${pictureUrl})`};
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: contain;

  @media (max-width: 1024px) {
    width: 80%;
    height: 300%;
  }

  @media (max-width: 600px) {
    display: none;
  }

  @media (max-width: 400px) {
    width: 60%;
    height: 200%;
  }

  ${({ isStaticImage }) =>
    isStaticImage &&
    `
  @media (max-width: 1024px) {
    width: 100%;
    height: 200%;
  }

  @media (max-width: 600px) {
    width: 80%;
    height: 100%;
  }

  @media (max-width: 450px) {
    width: 60%;
    height: 80%;
  }
  `}
`;
