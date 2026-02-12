import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import MainLayout from './components/layout/MainLayout';
import { useRoutes } from 'react-router-dom';
import { routes } from './utils/routesConfig';
import { sidebarItems } from './utils/sidebarConfig';

function App() {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
         {routing}
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;