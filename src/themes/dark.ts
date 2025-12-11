import { createTheme } from '@mui/material';

import { defaultTheme } from '.';

export const darkTheme = createTheme({
  ...defaultTheme,
  palette: {
    mode: 'dark',
  },
});
