import styled from '@emotion/styled';

type CardWrapperProps = {
  isAgentImage?: boolean;
};

export const BrokerCardsContainer = styled.main`
  width: 100%;

  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;

  @media (min-width: 1188px) {
    -webkit-box-pack: justify;
  }
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const ViewMoreOrLessCard = styled.section`
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  background-color: ${({ theme }) => theme.palette.secondary.lighter};

  .MuiTypography-h5,
  .MuiTypography-text {
    color: ${({ theme }) => theme.palette.grey[500]};
  }
`;

export const CardContent = styled.figure`
  width: 100%;
  min-height: 150px;

  max-width: 100%;
  min-width: 100%;

  margin: 0;
`;

export const CardWrapper = styled.section<CardWrapperProps>`
  flex: inherit;

  position: relative;
  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    &::before {
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 100%,
        rgba(0, 0, 0, 0) 100%
      );
      transition: background-image transition 200s ease;
    }

    & .relationships-stats {
      transform: translateX(0%);
      z-index: 3;
    }
  }

  ${({ isAgentImage }) =>
    isAgentImage &&
    `
      &::before {
        width: 100%;
        height: 100%;

        content: '';
        position: absolute;
        top: 0;

        opacity: 1;
        z-index: 1;

        background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 0.5) 100%
        );
      }
    `}

  @media (min-width: 1188px) {
    max-width: 180px;
    min-width: 180px;
  }
  @media (min-width: 430px) {
    max-width: 150px;
    min-width: 150px;
    height: 150px;
  }

  @media (max-width: 430px) {
    height: 100px;
    width: 100px !important;
  }
`;

export const AmountOfDealsBadge = styled.section`
  width: 30px;
  height: 30px;

  position: absolute;
  top: -5%;
  right: -4%;
  z-index: 1;

  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.palette.secondary.darker};

  .MuiTypography-text {
    font-weight: 700;
    color: ${({ theme }) => theme.palette.secondary.lighter};
  }
`;

export const CardHoverContent = styled.section`
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 0;

  display: flex;
  flex-direction: column;

  opacity: 0.9;
  padding: 10% 5%;

  transform: translateX(101%);
  transition: transform 200ms ease;

  color: ${({ theme }) => theme.palette.secondary.lighter};
  background-color: ${({ theme }) => theme.palette.primary.darker};

  .total-dealt {
    font-weight: 700;
  }
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.secondary.lighter};
`;
