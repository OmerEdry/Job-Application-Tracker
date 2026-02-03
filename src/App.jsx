import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
         <div>Main</div>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;