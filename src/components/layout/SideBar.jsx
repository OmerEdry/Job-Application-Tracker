import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Box, Typography, useTheme, ListItemIcon, IconButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { sidebarItems, SIDEBAR_WIDTH, SIDEBAR_COLLAPSED_WIDTH } from '../../utils/sidebarConfig';
import { SidebarIcons } from '../../assets/icons';
import Logo from '../../assets/Logo';
import { navItemsStyles, getNavTextStyle, getIconStyle } from '../../styles/SidebarStyle';


const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false); //Defualt SideBar Open (not collapsed)
    const currentWidth = isCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH;
    const location = useLocation();
    const theme = useTheme();
    const isSettingSelected = location.pathname === '/settings';

    return (
        <Drawer
            variant='permanent'
            anchor="left"
            sx={{
                width: currentWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: currentWidth, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' },
            }} >
            {/*Toolbar*/}
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

            {/*Main Navigation*/}
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
                                    sx={navItemsStyles(isSelected, theme, isCollapsed)}
                                >
                                    <ListItemIcon sx={getIconStyle(isSelected, theme, isCollapsed)}>
                                        <IconComponent />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        sx={getNavTextStyle(isSelected, theme, isCollapsed)}
                                    />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>
            {/* Footer: Settings & SideBar Toggle Button */}
            <Box sx={{
                mt: 'auto',
                display: 'flex',
                flexDirection: isCollapsed ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: isCollapsed ? 'center' : 'space-between',
                px: isCollapsed ? 0 : 2,
                py: 2,
                borderTop: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.3s ease',
            }}>
                {/* Settings Item */}
                <ListItem disablePadding sx={{ width: 'auto' }}>
                    <ListItemButton
                        component={Link}
                        to="/settings"
                        selected={isSettingSelected}
                        sx={navItemsStyles(isSettingSelected, theme, isCollapsed)}
                    >
                        <ListItemIcon sx={getIconStyle(isSettingSelected, theme, isCollapsed)}>
                            <SidebarIcons.Settings />
                        </ListItemIcon>
                        {!isCollapsed && (
                            <ListItemText
                                primary="Settings"
                                sx={getNavTextStyle(isSettingSelected, theme, isCollapsed)}
                            />
                        )}
                    </ListItemButton>
                </ListItem>

                {/* Toggle Button (Arrow) */}
                <IconButton
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    sx={{
                        color: 'text.primary',
                        mt: isCollapsed ? 1 : 0,
                        p: 1,
                        '& svg': {
                            fontSize: isCollapsed ? '30' :'25'
                        },
                        '&:focus, &:active, &.Mui-focusVisible': {
                            outline: 'none',
                            boxShadow: 'none',
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    {isCollapsed ? <SidebarIcons.SideBarOpen /> : <SidebarIcons.SideBarClose />}
                </IconButton>
            </Box>
        </Drawer>
    );
};

export default Sidebar;