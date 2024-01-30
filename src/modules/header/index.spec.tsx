import { ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import theme from '@/theme';

import { Header } from './index';

describe('Header', () => {
  it('should render header', () => {
    const header = render(
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </MuiThemeProvider>
    );

    const headerLabel = header.getByLabelText('Traded Header');

    expect(headerLabel).toBeInTheDocument();
  });

  describe('onOpenDrawer', () => {
    it('should open drawer when menu button is clicked', async () => {
      const header = render(
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Header />
          </ThemeProvider>
        </MuiThemeProvider>
      );

      const drawer = screen.getByLabelText(
        'Openable side menu with useful links'
      );

      expect(drawer.style.visibility).toBe('hidden');

      const menuButton = header.getByLabelText('Open menu links');

      fireEvent.click(menuButton);

      await waitFor(() => {
        const drawerOpen = screen.getByLabelText(
          'Openable side menu with useful links'
        );

        expect(drawerOpen.style).not.toContain('visilibity');
      });
    });
  });
});
