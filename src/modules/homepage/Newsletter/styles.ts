import styled from '@emotion/styled';

export const NewsletterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 70px;
  background-color: ${({ theme }) => theme.palette.green.dark};

  @media only screen and (max-width: 920px) {
    justify-content: flex-start;
    padding: 70px 20px 70px 20px;
  }
`;

export const NewsLetterFormContainer = styled.div`
  flex: 0 0 40%;
  @media only screen and (max-width: 920px) {
    flex: 0 0 100%;
  }
`;

export const NewsLetterSvgContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  @media only screen and (max-width: 920px) {
    display: none;
  }
`;
