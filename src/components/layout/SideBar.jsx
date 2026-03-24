import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Box, Typography, useTheme, ListItemIcon } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { sidebarItems } from '../../utils/sidebarConfig';
import { SidebarIcons } from '../../assets/icons';
import Logo from '../../assets/Logo';
import { navItemsStyles, getNavTextStyle, getIconStyle } from '../../styles/SidebarStyle';


const drawerWidth = 340;

const Sidebar = () => {
    const location = useLocation();
    const theme = useTheme();
    const isSettingSelected = location.pathname === '/settings';

    return (
        <Drawer
            variant='permanent'
            anchor="left"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' },
            }} >

            <Toolbar sx={{
                display: 'flex',
                alignItems: 'center',
                pt: 4,
                px: 3,
                mb: 5,
                minHeight: '64px',
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    <Logo style={{ width: 60, height: 60 }} />
                </Box>

                <Typography
                    variant="logoGradient"
                    noWrap
                    sx={{
                        fontFamily: '"Space Grotesk", "sans-serif"',
                        fontWeight: 700,
                        fontSize: '25.36px',
                        letterSpacing: 0,
                        lineHeight: 1,
                        ml: '10px',
                        userSelect: 'none'
                    }}>
                    NextStep
                </Typography>
            </Toolbar>

            <Box component="nav" sx={{ flexGrow: 1, overflow: 'auto', mt: 4 }}>

                <Typography variant="caption" sx={{ pl: 2, color: 'text.secondary', }}>
                    JOBS
                </Typography>

                <List>
                    {sidebarItems.map((item) => {
                        const isSelected = location.pathname === item.path;
                        const IconComponent = item.icon;
                        return (
                            <ListItem key={item.path} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to={item.path}
                                    selected={isSelected}
                                    sx={navItemsStyles(isSelected, theme)}
                                >
                                    <ListItemIcon sx={getIconStyle(isSelected, theme)}>
                                        <IconComponent />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        sx={getNavTextStyle(isSelected, theme)}
                                    />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>

            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/settings"
                        selected={isSettingSelected}
                        sx={navItemsStyles(isSettingSelected, theme)}
                    >
                        <ListItemIcon sx={getIconStyle(isSettingSelected, theme)}>
                            <SidebarIcons.Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" sx={getNavTextStyle(isSettingSelected, theme)} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;