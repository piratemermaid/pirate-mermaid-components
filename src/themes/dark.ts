import { createTheme, extendTheme } from '@mui/material';

import { defaultTheme } from '.';

export const darkTheme = extendTheme(
  defaultTheme,
  createTheme({
    palette: {
      mode: 'dark',
    },
  })
);
