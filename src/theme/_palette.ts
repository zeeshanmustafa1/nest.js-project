import type { PaletteOptions as MuiPaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    red: PaletteColor;
    black: PaletteColor;
    yellow: PaletteColor;
    green: PaletteColor;
  }
  interface PaletteColor {
    darker?: string;
    lighter?: string;
  }
  interface PaletteOptions {
    red: PaletteColorOptions;
    black: PaletteColorOptions;
    yellow: PaletteColorOptions;
    green: PaletteColorOptions;
  }

  interface PaletteColorOptions {
    main?: string;
    dark?: string;
    darker?: string;
    light?: string;
    lighter?: string;
  }
}

export const palette: MuiPaletteOptions = {
  primary: {
    main: '#4dd78a',
    dark: '#46a78b',
    darker: '#305f47',
  },
  secondary: {
    lighter: '#ffffff',
    light: '#f9f9f9',
    main: '#f0f0f0',
    dark: '#d4d7e2',
    darker: '#989ba7',
  },
  black: {
    main: '#202124',
  },
  yellow: {
    main: '#ffc800',
  },
  grey: {
    '100': '#e5e9f2',
    '500': '#63656a',
    '700': '#404145',
  },
  red: {
    main: '#ff3528',
  },
  green: {
    main: '#69D193',
    dark: '#273930',
  },
};
