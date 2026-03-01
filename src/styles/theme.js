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

    wishlist: {
      primary: '#7950F2',
      gradient: 'linear-gradient( #EBE4FF , #F4F2FA)',
    },

    applied: {
      primary: '#FA5252',
      gradient: 'linear-gradient(#FFD3D3, #FAF6F2)',
    },

    interviewing: {
      primary: '#FAB005',
      gradient: 'linear-gradient(#FFEACC,#FAFAF2)',
    },

    offer: {
      primary: '#22E656',
      gradient: 'linear-gradient(#D8FFD6, #F2FAF3)',
    },


  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;