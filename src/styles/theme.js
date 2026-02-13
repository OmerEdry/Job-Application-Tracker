import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B85E9', 
      light: '#88C7FC',
      dark: '#0E5AA1',
    },
    action: {
      selected: '#F2F4F7', 
      selectedOpacity: 1,
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
  fadeBlue: {
    primaryGradient: 'linear-gradient(to bottom, #1B85E9 10%, #88C7FC 80%)'
  }
});

export default theme;