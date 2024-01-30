import type { Palette } from '@mui/material';
import type { TypographyOptions as MuiTypographyOptions } from '@mui/material/styles/createTypography';

/*
 ? How to add a custom typography variant
 *
 * Insert new variant name and its types (follow examples) into
 *  - "TypographyVariants"
 *  - "TypographyVariantsOptions"
 *  - "TypographyPropsVariantOverrides"
 *
 * Then, you can add its CSS properties in the typography object
 */

declare module '@mui/material/styles' {
  interface TypographyOptions {}

  interface TypographyVariants {
    text?: React.CSSProperties;
    body?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    bodyLarge?: React.CSSProperties;
    bodyExtraLarge?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    text?: React.CSSProperties;
    body?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    bodyLarge?: React.CSSProperties;
    bodyExtraLarge?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  // All unused deactivated variants
  interface VariantsDeactivated {
    h6: false;
    body1: false;
    body2: false;
    button: false;
    inherit: false;
    caption: false;
    subtitle1: false;
    subtitle2: false;
    overline: false;
  }

  // Custom variants
  interface TypographyPropsVariantOverrides extends VariantsDeactivated {
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    text?: true;
    body?: true;
    bodySmall?: true;
    bodyLarge?: true;
    bodyExtraLarge?: true;
  }
}

type TradedTypographyOptions =
  | MuiTypographyOptions
  | ((palette: Palette) => MuiTypographyOptions)
  | undefined;

export const typography: TradedTypographyOptions = {
  fontFamily: ['Work Sans', '--apple-system'].join(','),

  h1: {
    fontSize: '58px',
    lineHeight: '56px',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    mixBlendMode: 'normal',

    '@media (max-width: 960px)': {
      fontSize: '48px',
      lineHeight: '50px',
    },

    '@media (max-width: 450px)': {
      fontSize: '32px',
      lineHeight: '34px',
    },
  },

  h2: {
    fontSize: '44px',
    lineHeight: '42px',
    fontWeight: 900,
    letterSpacing: '-0.02em',

    '@media (max-width: 960px)': {
      fontSize: '36px',
      lineHeight: '36px',
    },

    '@media (max-width: 625px)': {
      fontSize: '30px',
      lineHeight: '30px',
    },

    '@media (max-width: 450px)': {
      fontSize: '22px',
      lineHeight: '22px',
    },
  },

  h3: {
    fontSize: '32px',
    lineHeight: '32px',
    fontWeight: 700,
    letterSpacing: '-0.02em',

    '@media (max-width: 960px)': {
      fontSize: '24px',
      lineHeight: '28px',
    },

    '@media (max-width: 600px)': {
      fontSize: '18px',
      lineHeight: '20px',
    },
  },

  h4: {
    fontSize: '22px',
    lineHeight: '22px',
    fontWeight: 700,
    letterSpacing: '-0.02em',

    '@media (max-width: 960px)': {
      fontSize: '20px',
      lineHeight: '30px',
      letterSpacing: '-0.01em',
    },
  },

  h5: {
    fontSize: '24px',
    lineHeight: '24px',
    fontWeight: 400,
  },

  text: {
    fontSize: '16px',
    lineHeight: '16px',
    fontWeight: 600,
    fontFamily: ['Work Sans', '--apple-system'].join(','),
    letterSpacing: '0em',
  },

  body: {
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 400,
    fontFamily: ['Work Sans', '--apple-system'].join(','),
    letterSpacing: '-0.02em',
  },

  bodySmall: {
    fontSize: '14px',
    lineHeight: '20px',
    fontFamily: ['Work Sans', '--apple-system'].join(','),
    fontWeight: 400,
  },

  bodyLarge: {
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 500,
    letterSpacing: '-0.02em',
    fontFamily: ['Work Sans', '--apple-system'].join(','),
  },

  bodyExtraLarge: {
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: 400,
    fontFamily: ['Work Sans', '--apple-system'].join(','),
    letterSpacing: '-0.05em',
  },
};
