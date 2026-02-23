import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import MainLayout from './components/layout/MainLayout';
import { useRoutes } from 'react-router-dom';
import { routes } from './utils/routesConfig';
import IconStyle from './styles/IconStyle';

function App() {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconStyle />
      <MainLayout>
         {routing}
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;