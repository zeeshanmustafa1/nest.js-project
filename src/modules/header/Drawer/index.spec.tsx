import { ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';

import theme from '@/theme';

import { Drawer } from './index';

describe('Header', () => {
  it('drawer should always be in the document even when its closed', () => {
    const open = false;
    const onClose = jest.fn();

    render(
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Drawer open={open} onClose={onClose} />
        </ThemeProvider>
      </MuiThemeProvider>
    );

    const drawer = screen.getByLabelText(
      'Openable side menu with useful links'
    );

    expect(drawer).toBeInTheDocument();
    expect(drawer.style.visibility).toBe('hidden');
  });
  it('should display drawer when its prop "open" is equal true', async () => {
    const open = true;
    const onClose = jest.fn();

    render(
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Drawer open={open} onClose={onClose} />
        </ThemeProvider>
      </MuiThemeProvider>
    );

    const drawer = screen.getByLabelText(
      'Openable side menu with useful links'
    );

    expect(drawer.style).not.toContain('visilibity');
  });
});
