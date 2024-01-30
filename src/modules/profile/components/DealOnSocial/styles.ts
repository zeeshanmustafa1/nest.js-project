import styled from '@emotion/styled';

export const DealSocialAndContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const DealOnSocialContainer = styled.div`
  flex: 0 0 58%;
  @media (max-width: 540px) {
    flex: 0 0 58%;
    max-height: 500px;
    overflow-y: scroll;
    margin-bottom: 20px;
  }
`;

export const DealTextContentContainer = styled.div`
  background: #f0f0f0;
  border: 1px solid #d4d7e2;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 20px;
  flex: 0 0 40%;
  height: max-content;
`;

export const DealTextContent = styled.div`
  white-space: pre-line;
  margin-top: 10px;
`;

export const DealInstagramSocialEmbed = styled.iframe`
  background: white;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  box-shadow: none;
  display: block;
  margin: 0px 0px 12px;
  padding: 0px;
  box-sizing: border-box;
  height: 1106px;
  width: 100%;
`;
