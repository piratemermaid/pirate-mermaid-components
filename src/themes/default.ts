import { createTheme } from '@mui/material';

export const defaultTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
    },
  },
});
