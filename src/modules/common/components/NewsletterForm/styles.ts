import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const StyledForm = styled.form`
  .MuiFormControl-root {
    label,
    input,
    div {
      color: ${({ theme }) => theme.palette.secondary.darker};
    }
    input {
      padding: 15px 8px 18px 12px;
    }
  }

  .MuiInputBase-root {
    border-radius: 6px;
    fieldset {
      border-width: 1px !important;
      border: 1px solid ${({ theme }) => theme.palette.primary.darker};
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.primary.darker} !important;
  }
`;

export const StyledError = styled(Typography)`
  color: red;
`;
