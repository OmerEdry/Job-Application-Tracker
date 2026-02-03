import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#F9FAFC',
      paper: '#ffffff',
    },
    text: {
      primary: '#5f6368',
      secondary: '#98A2B3',
    },
    divider: '#e0e0e0',
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;