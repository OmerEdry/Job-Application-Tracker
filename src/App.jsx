import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import MainLayout from './components/layout/MainLayout';
import mockJobsData from './mockJobs/mockJobs';
import KanbanBoard from './components/kanban/KanbanBoard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <KanbanBoard />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;