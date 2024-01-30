import styled from '@emotion/styled';

export const CompanyCardWrapper = styled.div`
  display: flex;
  border-radius: 20px;
  border: 1px solid #d4d7e2;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 50px;
  margin-right: 50px;
  @media (max-width: 900px) {
    flex-direction: column;
    max-width: 400px;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 25px;
    margin-right: 25px;
  }
`;

export const ImageWrapper = styled.section`
  padding: 0px;
  overflow: hidden;
  @media (min-width: 900px) {
    height: 200px;
    width: 200px;
    min-width: 200px;
    border-radius: 20px 0px 0px 20px;
  }
  @media (max-width: 899px) {
    min-height: 325px;
    border-radius: 20px 20px 0px 0px;
  }
`;

export const InfoWrapper = styled.section`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
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
