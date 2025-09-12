import { createTheme } from "@mui/material";

export const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%'
        },
      },
    },
    MuiInput: {
      root: {
        '&.MuiInput-underline:before': {
          borderBottom: '1px solid rgb(224 224 224)',
        }
      },
      input: {
        padding: '20px 8px',
      },
    },
    MuiInputLabel: {
      root: {
        '[dir="rtl"] &': {
          position: 'absolute',
          right: 25,
          left: 'auto',
          textAlign: 'right',
          transformOrigin: 'top right',
        },
      },
      shrink: {
        '[dir="rtl"] &': {
          top: -2,
          right: 30,
          left: 'auto',
          transformOrigin: 'right center',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: '#f5f5f5',
        paddingRight: '0 !important',
        border: '1px solid rgb(224 224 224)',
        borderRadius: '8px',
        '&.Mui-focused': {
          border: 0,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#bf198d', // primary pink-purple
        },
        '&.MuiInputBase-root.Mui-disabled': {
          border: 0,
        },
      },
      input: {
        '&:-webkit-autofill': {
          boxShadow: '0 0 0 1000px white inset',
          caretColor: '#000',
          borderRadius: 'inherit',
          '-webkit-box-shadow': 'none',
          '-webkit-text-fill-color': '#000',
        }
      },
      notchedOutline: {
        '[dir="rtl"] &': {
          transform: 'scaleX(-1)'
        }
      },
    },
    MuiCardHeader: {
      root: {
        '& .MuiCardHeader-action': {
          marginTop: 0,
          marginRight: 0,
        }
      }
    },
    MuiAutocomplete: {
      root: {
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        '&[dir="rtl"] .MuiAutocomplete-endAdornment': {
          left: 0,
          right: 'auto',
        }
      },
      popupIndicator: {
        color: '#bf198d', // brand primary
      },
      listbox: {
        padding: 0,
        maxHeight: '200px',
        overflowY: 'auto',
        backgroundColor: '#ffffff',
        border: '1px solid #ddd',
        '& .MuiAutocomplete-option': {
          padding: '10px 16px',
          borderBottom: '1px solid #eee',
          '&[aria-selected="true"]': {
            backgroundColor: '#bf198d',
            color: '#fff'
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1718,
      xl: 1920
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: false,
      },
      styleOverrides: {
        root: { textTransform: 'none' }
      }
    },
    MuiButtonBase: {
      defaultProps: { disableRipple: true }
    }
  },
  palette: {
    primary: {
      main: '#bf198d',
      light: '#d61c9e',
      dark: '#a8167c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#591659',
      light: '#641964',
      dark: '#4e134e',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#e328ab',
      light: '#fe2dc0',
      dark: '#c82396',
      contrastText: '#ffffff',
    },
    support: {
      main: '#92136c',
      light: '#a41579',
      dark: '#80115f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f7fbfc',
      paper: '#ffffff'
    },
    text: {
      primary: '#111111',
      secondary: '#591659',
      disabled: 'rgba(17,17,17,0.48)',
    },
    divider: '#e0e0e0',
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    button: { fontWeight: 600 }
  }
});
