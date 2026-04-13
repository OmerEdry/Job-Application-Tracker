import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import MainLayout from './components/layout/MainLayout';
import { useRoutes } from 'react-router-dom';
import { routes } from './utils/routesConfig';
import IconStyle from './styles/IconStyle';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <IconStyle />
        <MainLayout>
          {routing}
        </MainLayout>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;