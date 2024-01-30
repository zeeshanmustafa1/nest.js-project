import type { Components, ThemeOptions } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    'neon-green': true;
    'neon-yellow': true;
    'white-button-black-text': true;
    'white-button-black-text-hover-alter': true;
  }
}

const MuiButton: Components['MuiButton'] = {
  styleOverrides: {
    sizeMedium: {
      fontSize: '16px',
    },
    sizeSmall: {
      fontWeight: 600,
      fontSize: '10px',
    },
    sizeLarge: {
      fontSize: '18px',
    },
    root: {
      gap: '10px',
      color: '#fff',
      padding: '8px 14px',
      textTransform: 'none',
      fontWeight: 700,
      borderRadius: '8px',

      '@media (max-width: 600px)': {
        padding: '7px 10px',
        fontWeight: 600,
        fontSize: '14px',
        borderRadius: '6px',
      },
    },
  },
  variants: [
    {
      props: { variant: 'neon-green' },
      style: {
        backgroundColor: '#4dd78a',
        boxShadow: '0px 2px 12px rgba(195, 255, 222, 0.7)',
        '&:hover': {
          background: '#46a78b',
        },
      },
    },
    {
      props: { variant: 'neon-yellow' },
      style: {
        backgroundColor: '#ffc800',
        color: '#202124',
        boxShadow: '0px 2px 15px #ffd771',
        '&:hover': {
          background: '#f3c008',
        },
      },
    },
    {
      props: { variant: 'white-button-black-text' },
      style: {
        backgroundColor: '#FFFFFF',
        color: '#000',
        '&:hover': {
          background: '#fff',
        },
      },
    },
    {
      props: { variant: 'white-button-black-text-hover-alter' },
      style: {
        backgroundColor: '#FFFFFF',
        color: '#000',
        '&:hover': {
          background: '#000',
          '> a': {
            color: '#FFF',
          },
        },
      },
    },
  ],
};

export const components: ThemeOptions['components'] = {
  MuiButton,
};
