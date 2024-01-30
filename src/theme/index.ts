import { createTheme } from '@mui/material/styles';

import { components } from './_components';
import { palette } from './_palette';
import { typography } from './_typography';

const theme = createTheme({
  palette,
  typography,
  components,
});

type TradedTheme = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends TradedTheme {}
}

declare module '@mui/material/styles/createTheme' {
  export interface BaseTheme extends TradedTheme {}
}

export default theme;
