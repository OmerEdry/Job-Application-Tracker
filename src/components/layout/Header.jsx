import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (
        <AppBar
            position="static"
            color="transparent"
            elevation={0}
            sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>

            <Toolbar sx={{ px: 4 }}>
                <Typography variant="h1" component="div" sx={{ color: '#1B0338', fontWeight: 'bold' }}>
                    Job Applications
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;