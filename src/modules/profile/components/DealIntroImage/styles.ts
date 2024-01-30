import styled from '@emotion/styled';

export const DealIntroImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const DealIntroImageWrapper = styled.div`
  width: 350px;
  height: 350px;
  border: 1px solid ${({ theme }) => theme.palette.black.main} !important;
  border-radius: 12px;
  @media (max-width: 400px) {
    width: 250px;
    height: 250px;
    img {
      width: 250px;
      height: 250px;
    }
  }
`;
