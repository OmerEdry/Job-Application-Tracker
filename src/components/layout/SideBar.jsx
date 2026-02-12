import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Box, Typography } from '@mui/material';

const drawerWidth = 240;

const Sidebar = () => {
    return (
        <Drawer
            variant='permanent'
            anchor="left"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box',display:'flex',flexDirection: 'column'},
            }} >
                <Toolbar>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        NextStep
                    </Typography>
                </Toolbar>

                <Box component="nav" sx={{ flexGrow: 1, overflow: 'auto' , mt: 12}}>
                
                <Typography variant="caption" sx={{ pl: 2, color: 'text.secondary' }}>
                    JOBS
                </Typography>

                <List>
                    {['Job Applications', 'Resumes', 'Subscription', 'Archive'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>

            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
            </List>
            </Drawer>
    );
};

export default Sidebar;