import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const CompanyCardWrapper = styled(Box)`
  display: flex;
  border-radius: 20px;
  border: 1px solid #d4d7e2;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  overflow: hidden;

  @media (max-width: 900px) {
    max-width: 400px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const ImageWrapper = styled.section`
  padding: 0px;
  overflow: hidden;
  @media (min-width: 900px) {
    height: 180px;
    width: 180px;

    border-radius: 20px 0px 0px 20px;
  }
  @media (max-width: 899px) {
    width: 100%;
    border-radius: 20px 20px 0px 0px;
  }
`;

export const InfoWrapper = styled.section`
  display: flex;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  @media (min-width: 900px) {
    border-right: 1px solid #d4d7e2;
    width: 50%;
    flex-direction: column;
  }
  @media (max-width: 899px) {
    border-bottom: 1px solid #d4d7e2;
    flex-direction: column;
  }
`;

export const CompanyImageWrapper = styled.figure`
  width: 100%;
  max-width: 60px;
  min-width: 60px;

  height: 100%;
  max-height: 60px;
  min-height: 60px;
  min-width: 60px;
  margin: 0;
`;

export const AvatarWrapper = styled.div`
  margin: 5px;
  .MuiAvatar-square {
    height: 60px;
    width: 60px;
  }
`;
