import { createTheme, extendTheme } from '@mui/material';
import { purple, teal } from '@mui/material/colors';

import { defaultTheme } from '.';

export const lightTheme = extendTheme(
  defaultTheme,
  createTheme({
    palette: {
      mode: 'light',
    },
  })
);
