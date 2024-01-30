import styled from '@emotion/styled';

export const FooterWrapper = styled.div`
  border-top: 1px solid white;
  display: flex;
  justify-content: space-around;
  padding-top: 70px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.black.main};

  @media only screen and (max-width: 900px) {
    justify-content: flex-start;
    padding: 70px 20px 0px 20px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;
  flex: 0 0 80%;
  text-align: center;
  @media only screen and (max-width: 920px) {
    flex: 0 0 100%;
  }
`;
export const StyleLink = styled.a`
  color: ${({ theme }) => theme.palette.secondary.dark};
  text-decoration: none;
`;

export const StyledButton = styled('button')({
  appearance: 'button',
  border: 0,
  outline: 0,
  borderRadius: '50%',
  opacity: 1,
  height: 60,
  width: 60,
  margin: 5,
  backgroundColor: '#273930',
});

export const StyledButtonWrapper = styled.div`
  max-width: 100%;
  @media (max-width: 900px) {
    margin-top: 20px;
  }
`;

export const DividerWrapper = styled.div``;
