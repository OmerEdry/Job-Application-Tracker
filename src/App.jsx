import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import MainLayout from './components/layout/MainLayout';
import { useRoutes } from 'react-router-dom';
import { routes } from './utils/routesConfig';
import IconStyle from './styles/IconStyle';
import { NotificationProvider } from './context/NotificationContext';
import GlobalNotification from './components/ui/GlobalNotification';


function App() {
  const routing = useRoutes(routes);

  return (
    <NotificationProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <IconStyle />
        <MainLayout>
          {routing}
        </MainLayout>
        <GlobalNotification />
      </ThemeProvider>
    </NotificationProvider>
  );
}

export default App;