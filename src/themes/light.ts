import { createTheme } from '@mui/material';

import { defaultTheme } from '.';

export const lightTheme = createTheme({
  ...defaultTheme,
  palette: {
    mode: 'light',
  },
});
