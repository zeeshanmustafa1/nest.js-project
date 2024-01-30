import styled from '@emotion/styled';

export const TransactionCardWrapper = styled.li`
  width: 100%;

  display: flex;
  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  border-radius: 8px;

  @media (max-width: 540px) {
    flex-direction: row;
  }
`;

export const TransactionImageWrapper = styled.figure`
  width: 50%;
  height: 100%;
  min-height: 100%;

  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 50%;

  margin: 0;

  @media (max-width: 1100px) {
    width: 40%;
    flex-basis: 40%;
  }

  @media (max-width: 875px) {
    width: 30%;
    flex-basis: 30%;
  }

  @media (max-width: 650px) {
    width: 50%;
    flex-basis: 50%;
  }

  @media (max-width: 540px) {
    width: 50%;
    flex-basis: 50%;
  }
`;

export const TransactionContent = styled.section`
  width: 50%;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  padding: 5px 8px;

  .MuiTypography-text {
    color: ${({ theme }) => theme.palette.grey[500]};
    font-size: 12px;
  }

  .MuiTypography-body {
    width: 65%;

    margin-left: 10px;

    font-size: 13px;
    line-height: 14px;

    overflow: hidden;

    font-weight: 500;
  }

  @media (max-width: 1100px) {
    width: 50%;
    flex-basis: 50%;

    .MuiTypography-body {
      font-size: 16px;
      line-height: 16px;
    }
  }

  @media (max-width: 875px) {
    width: 60%;
    flex-basis: 60%;

    .MuiTypography-h4 {
      font-size: 30px;
    }
  }

  @media (max-width: 650px) {
    width: 50%;
    flex-basis: 50%;
  }

  @media (max-width: 540px) {
    width: 50%;
    flex-basis: 50%;

    .MuiTypography-body {
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      font-size: 10px;
    }

    .MuiTypography-h4 {
      font-size: 15px;
    }
  }
`;

export const TransactionInfoList = styled.ul`
  width: 100%;

  padding: 0;

  list-style-type: none;
`;

export const TransactionInfo = styled.li`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 7px;
  }

  @media (min-width: 540px) {
    :first-of-type {
      margin-top: 32px;
    }
  }
  @media (max-width: 540px) {
    margin-bottom: 2px;
  }
`;

export const TransactionBrokersInvolvedWrapper = styled.ul`
  display: flex;
  gap: 5px;

  padding: 0;
`;
