import type { StandardTextFieldProps } from '@mui/material';
import { TextField } from '@mui/material';

interface InputProps extends Omit<StandardTextFieldProps, 'error'> {
  errorMessage?: string;
  error?: boolean | string;
}

export const Input: React.FC<InputProps> = ({ errorMessage = '', ...rest }) => {
  const { sx, error } = rest;

  return (
    <TextField
      {...rest}
      error={Boolean(error)}
      sx={{
        '&:after': {
          content: `"${errorMessage}"`,
          color: 'red.main',
        },
        ...sx,
      }}
    />
  );
};
