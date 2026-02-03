import { Box, CssBaseline } from '@mui/material';
import { Children } from 'react';
const MainLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', width: '100vw' }}>
            <CssBaseline />

            {/*Left side-Side bar */}
            <Box sx={{
                width: '240px',
                bgcolor: '#ffffff',
                borderRight: '2px solid #e0e0e0',
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'space-between',
                height: '100vh',
                p:3 }}>

            <Box>
                {/*Logo & Navigation */}
                <Box>
                    {/*Logo-need to add logo picture*/}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 10,
                        fontWeight: 'bold',
                        color: '#1976d2',
                        fontSize: '1.2rem'
                    }}>
                        NextStep
                    </Box>
                    {/*sub label 'JOBS' -raw data */}
                    <Box sx={{ 
                        fontSize: '0.75rem', 
                        fontWeight: '600', 
                        color: '#98A2B3', 
                        mb: 2, 
                        letterSpacing: '0.05em' 
                        }}>
                        JOBS
                    </Box>

                    {/*Navigation - for now raw data later will be tabs*/}
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3, color: '#5f6368'}}>
                        <Box>Job Application</Box>
                        <Box>Resume</Box>
                        <Box>Subscriptions</Box>
                        <Box>Archive</Box>
                    </Box>
                </Box>

            </Box>

            {/*Settings-raw data */}
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1, color: '#5f6368'}}>
                 Settings
            </Box>


            </Box>

            {/*Right side-Header+Main*/}
            <Box sx={{
                flexGrow:1,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
                }}>
                
                {/*Right side-Header*/}
                <Box sx={{
                    height: '64px',
                    bgcolor: 'white',
                    borderBottom: '2px solid #e0e0e0',
                    display: 'flex',
                    alignItems: 'center',
                    px: 4,
                    zIndex: 1100
                    }}>
                        Toolbar (Job Applications)
                </Box>

                {/*Right side Bottom- Main */}
                <Box component="main" sx={{
                    flexGrow:1,
                    p: 4,
                    bgcolor: '#ffffff',
                    overflowY:'auto'
                }}>
                  {children}  
                
                </Box>
            </Box>

        </Box>
    );
};

export default MainLayout;
