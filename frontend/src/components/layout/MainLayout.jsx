import { Box, CssBaseline } from '@mui/material';
import Sidebar from './SideBar';
import Header from './Header';


const MainLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', width: '100vw' }}>
            <CssBaseline />

            {/*Left side-Side bar */}
            <Sidebar />

            {/*Right side-Header+Main*/}
            <Box sx={{
                flexGrow: 1,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
            }}>

                {/*Right side-Header*/}
                <Header />

                {/*Right side Bottom- Main */}
                <Box component="main" sx={{
                    flexGrow: 1,
                    p: 4,
                    bgcolor: 'background.default',
                    overflowY: 'auto'
                }}>
                    {children}

                </Box>
            </Box>

        </Box>
    );
};

export default MainLayout;
