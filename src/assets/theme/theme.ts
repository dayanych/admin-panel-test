import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#2cda7f',
      main: '#32c076',
      dark: '#2db26c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ebebf0',
      main: '#9494a0',
      dark: '#424f5e',
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
      fontSize: '3.2rem',
      fontWeight: 700,
      color: '#424f5e',
      xs: {
        fontSize: '3.2rem',
      },
      md: {
        fontSize: '3.2rem',
      },
      lg: {
        fontSize: '3.2rem',
      },
    },
    h2: {
      fontSize: '2.6rem',
      fontWeight: 700,
      color: '#424f5e',
      xs: {
        fontSize: '2.6rem',
      },
      md: {
        fontSize: '2.6rem',
      },
      lg: {
        fontSize: '2.6rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#424f5e',
      xs: {
        fontSize: '2rem',
      },
      md: {
        fontSize: '2rem',
      },
      lg: {
        fontSize: '2rem',
      },
    },
    h4: {
      fontSize: '1.8rem',
      fontWeight: 700,
      color: '#424f5e',
      xs: {
        fontSize: '1.8rem',
      },
      md: {
        fontSize: '1.8rem',
      },
      lg: {
        fontSize: '1.8rem',
      },
    },
    body1: {
      fontSize: '1.6rem',
      color: '#9494a0',
      xs: {
        fontSize: '1.6rem',
      },
      md: {
        fontSize: '1.6rem',
      },
      lg: {
        fontSize: '1.6rem',
      },
    },
    body2: {
      fontSize: '1.4rem',
      xs: {
        fontSize: '1.4rem',
      },
      md: {
        fontSize: '1.4rem',
      },
      lg: {
        fontSize: '1.4rem',
      },
    },
    button: {
      fontSize: '1.6rem',
      xs: {
        fontSize: '1.6rem',
      },
      md: {
        fontSize: '1.6rem',
      },
      lg: {
        fontSize: '1.6rem',
      },
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundColor: 'transparent',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          textTransform: 'none',
          letterSpacing: '0.5px',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          maxHeight: 36,
          borderRadius: 16,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&.Mui-checked': {
            color: '#5856d6',
          },
        },
      },
    },
  },
});

const responsiveFontSizesTheme = responsiveFontSizes(theme);

export { responsiveFontSizesTheme };
