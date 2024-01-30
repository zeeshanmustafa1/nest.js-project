import styled from '@emotion/styled';

export const Form = styled.form`
  width: 65%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 40px;

  border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  border-radius: 8px;

  & option {
    padding: 8px 12px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.light};
    }
  }

  @media (max-width: 875px) {
    width: 100%;
  }
`;

export const BrokerCard = styled.section`
  width: 30%;
  minheight: 300px;

  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  border-radius: 8px;

  @media (max-width: 875px) {
    width: 100%;
    height: 400px;
  }
`;

export const BrokerCardInfo = styled.div`
  width: 100%;

  padding: 20px;

  background-color: ${({ theme }) => theme.palette.grey[700]};
  border-radius: 0 0 8px 8px;

  .MuiTypography-h4 {
    color: ${({ theme }) => theme.palette.secondary.lighter};
  }

  .MuiTypography-bodySmall {
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

export const ContactContent = styled.main`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 875px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
  }
`;

export const FormButtonsWrapper = styled.section`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  .MuiButton-contained {
    background-color: ${({ theme }) => theme.palette.grey[500]};
  }
`;
