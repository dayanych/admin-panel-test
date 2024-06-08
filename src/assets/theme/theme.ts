import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#c1c1cb',
      main: '#9494a0',
      dark: '#424f5e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#2cda7f',
      main: '#32c076',
      dark: '#28985d',
      contrastText: '#fff',
    },
    success: {
      light: '#4caf50',
      main: '#2e7d32',
      dark: '#1b5e20',
      contrastText: '#fff',
      300: '#cbf6d2',
      400: '#d1ffd9',
      500: '#2edb4b',
      600: '#007700',
    },
    error: {
      light: '#ef5350',
      main: '#d32f2f',
      dark: '#c62828',
      contrastText: '#fff',
      300: '#ffd4d4',
      400: '#ffb8b8',
      500: '#ff5252',
      600: '#af0202',
    },
    warning: {
      light: '#ff9800',
      main: '#ed6c02',
      dark: '#e65100',
      contrastText: '#fff',
      300: '#fff4ce',
      400: '#ffedad',
      500: '#ffd43a',
      600: '#ac8306',
    },
    info: {
      light: '#03a9f4',
      main: '#0288d1',
      dark: '#01579b',
      contrastText: '#fff',
    },
    grey: {
      50: '#F9FAFB',
      100: '#EBEBF0',
      200: '#C4C4C4',
      300: '#C1C1CB',
      400: '#9494A0',
    },
    divider: '#ebebf0',
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeightMedium: 600,
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      color: '#424f5e',
    },
    h2: {
      fontSize: '3.2rem',
      fontWeight: 700,
      color: '#424f5e',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#424f5e',
    },
    h4: {
      fontSize: '1.8rem',
      fontWeight: 700,
      color: '#424f5e',
    },
    body1: {
      fontSize: '1.6rem',
      color: '#9494a0',
    },
    body2: {
      fontSize: '1.4rem',
    },
    button: {
      fontSize: '1.6rem',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '2.4rem',
          boxShadow: 'none',
        },
      },
    },
  },
});

const responsiveFontSizesTheme = responsiveFontSizes(theme);

export { responsiveFontSizesTheme };
