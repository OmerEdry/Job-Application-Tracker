import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      //Based on default MUI colors (only main is on figma)
      main: '#1976D2',
      light: '#42A5F5',
      dark: '#1565C0',

      //Light mode colors
      '50': '#88C7FC',
      '100': '#339AF0',
      '200': '#1B8FE9',
      '300': '#1976D2',
      '400': '#1864AB',

      //Dark mode colors (also used in the logo)
      '500': '#7AA4C9',
      '600': '#5C86AE',
      '700': '#4C739A',
      '800': '#3B5F85',
      '900': '#2A4A6F',
    },

    //Status colors
    wishlist: { main: '#7950F2' },
    applied: { main: '#FA5252' },
    interviewing: { main: '#FAB005' },
    offer: { main: '#22E656' },

    action: {
      selected: '#F2F4F7',
      selectedOpacity: 0.8,
    },
    background: {
      default: '#F9FAFC',
      paper: '#ffffff',
    },
    background2: {
      default: '#F5F5F5',
    },
    text: {
      primary: '#191919',
      secondary: '#98A2B3',
    },

    divider: '#e0e0e0',


  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    //non gradient text tilte usage

    h1: {
      fontFamily: '"Space Grotesk", "sans-serif"',
      fontWeight: 700,
      fontSize: '1.5rem',
      letterSpacing: 0,
      lineHeight: 1,
    },

    h2: {
      fontFamily: '"Space Grotesk", "sans-serif"',
      fontWeight: 700,
      fontSize: '1.25rem',
      letterSpacing: 0,
      lineHeight: 1,
    },

    h3: {
      fontFamily: '"Space Grotesk", "sans-serif"',
      fontWeight: 700,
      fontSize: '1.125rem',
      letterSpacing: 0,
      lineHeight: 1,
    },


    h4: {
      fontFamily: '"Space Grotesk", "sans-serif"',
      fontWeight: 700,
      fontSize: '1rem',
      letterSpacing: 0,
      lineHeight: 1,
    },
    h5: {
      fontFamily: '"Space Grotesk", "sans-serif"',
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: 0,
      lineHeight: 1,
    },

    subtitle1: {
      fontFamily: '"Inter", "sans-serif"',
      fontWeight: 400,
      fontSize: '1.25rem',
      letterSpacing: 0,
      lineHeight: 1,
    },

    subtitle2: {
      fontFamily: '"Inter", "sans-serif"',
      fontWeight: 400,
      fontSize: '1rem',
      letterSpacing: 0,
      lineHeight: 1,
    },

    subtitle3: {
      fontFamily: '"Inter", "sans-serif"',
      fontWeight: 400,
      fontSize: '0.875rem',
      letterSpacing: 0,
      lineHeight: 1,
    },

    //Sidebar Menu text
    body1: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1,
    },
    caption: {
      display: 'block',
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      letterSpacing: 0,
      lineHeight: 1,



    },
    jobCardCompany: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: 1,
      color: '#191919',
      display: 'block',
    },
    jobCardInfo: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: 1,
      color: 'text.primary',
      display: 'block',
    },
  },

  gradients: {
    primary: 'linear-gradient(to bottom, #1B85E9 10%, #88C7FC 80%)',
    wishlist: 'linear-gradient( #EBE4FF , #F4F2FA)',
    applied: 'linear-gradient( #FFD3D3, #FAF6F2)',
    interviewing: 'linear-gradient( #FFEACC, #FAFAF2)',
    offer: 'linear-gradient( #D8FFD6, #F2FAF3)',
  },

  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'gradientBlueText' },
          style: ({ theme }) => ({
            background: theme.gradients.primary,
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
            background: theme.gradients.primary,
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
    //Moved it inside 'components'. MUI will ignore this part otherwise.
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0,
        }
      }
    }
  },

},
);

export default theme;