import styled from '@emotion/styled';
import { Avatar as MuiAvatar } from '@mui/material';

export const StyledLink = styled.a<{ fullWidth: boolean }>`
  text-decoration: none;

  width: 100%;
  max-width: 60px;
  max-height: 60px;
  min-width: 60px;
  min-height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .MuiTypography-h4 {
    color: ${({ theme }) => theme.palette.grey[700]};
  }

  @media (max-width: 540px) {
    min-width: 25px;
    min-height: 25px;
  }

  ${(props) => props.fullWidth && 'max-width: fit-content'}
`;

export const Avatar = styled(MuiAvatar)`
  width: 100%;
  height: 100%;

  padding: 4px 4px 0 4px;

  background: rgba(203, 203, 203, 0.4);
  border-radius: 15px;

  img {
    width: 100%;
    object-fit: contain;
  }

  h4 {
    display: block;
  }

  @media (max-width: 1024px) {
    img {
      object-fit: cover;
    }
  }
`;
