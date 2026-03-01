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
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    //non gradient text tilte usage
    h4: {
      fontWeight: 700,
      fontSize: '1.65rem',
      letterSpacing: '-0.02em',
      lineHeight: 1,
    },
    //Sidebar Menu text
    body1: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1,
    },
    caption: {
      fontFamily:'"Space Grotesk", sans-serif',
      fontSize: '16px',
      lineHeight: '100%',
      letterSpacing: '0%',
      fontWeight: 400,
      display: 'block',
    }
  },
  gradientBlue: {
    primaryGradient: 'linear-gradient(to bottom, #1B85E9 10%, #88C7FC 80%)'
  },
  components: {
    MuiTypography: {
      variants: [
        {
        props: { variant: 'gradientBlueText' },
        style: ({ theme }) => ({
          background: theme.gradientBlue.primaryGradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
          color: 'transparent',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          fontWeight: 'inherit',
          lineHeight: 'inherit',
          letterSpacing: 'inherit',
          }),
        },
        //Logo text-Titles to prevent OverRide
        {
        props: { variant: 'logoGradient' },
        style: ({ theme }) => ({
          background: theme.gradientBlue.primaryGradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
          color: 'transparent',
          fontFamily: '"Inter", sans-serif',
          fontSize: '1.65rem', 
          fontWeight: 700,      
          letterSpacing: '-0.02em',
          lineHeight: 1,
          }),
        },
      ],
    },
  },
  MuiListItemText: {
        styleOverrides: {
            root: {
                margin: 0, 
            }
        }
    }
  },
);

export default theme;