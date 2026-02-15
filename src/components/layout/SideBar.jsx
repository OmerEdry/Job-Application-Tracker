import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Box, Typography, useTheme,ListItemIcon } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { sidebarItems } from '../../utils/sidebarConfig';
import { SidebarIcons } from '../../assets/icons';
import Logo from '../../assets/Logo';


const drawerWidth = 340;

//style logic
const navItemsStyles = (isSelected, theme) => ({
    mx: 2,
    borderRadius: '12px',
    mb: 0.5,
    position: 'relative',
    py: 0.5,
    minHeight: '40px',
    transition: 'all 0.2s ease',
    //Floating side blue line 
    '&::before': {
        content: isSelected ? '""' : 'none',
        position: 'absolute',
        left: 0,
        top: '30%',
        height: '40%',
        width: '3px',
        background: isSelected ? theme.fadeBlue.primaryGradient : 'none',
        borderRadius: '0 4px 4px 0',
        zIndex: 1,
    },
    '&.Mui-selected': {
        backgroundColor: 'action.selected',
        '&:hover': {
            backgroundColor: 'action.hover',
        },
    },
    '&:hover': {
        backgroundColor: 'action.hover',
    },
});
const getNavTextStyle = (isSelected, theme) => ({
    pl: 1.5,
    '& .MuiTypography-root': {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '1.25rem',
        fontWeight: 400,
        letterSpacing: '0',
        lineHeight: '1',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        ...(isSelected ? theme.components.MuiTypography.variants[0].style({ theme }) : { color: 'text.primary' })
    },
});
const getIconStyle = (isSelected, theme) => ({
    minWidth: '30px',
    display: 'flex',
    justifyContent: 'center',
    marginRight: '10px',
    '& .MuiSvgIcon-root, & svg': {
        fontSize: '26px',
        transition: 'all 0.3s ease',
        color: isSelected ? 'inherit' : theme.palette.text.secondary,
    },
    /** Points to the SVG gradient defined globally in 'src/styles/IconStyle.jsx'
        CSS 'color' property doesn't support gradients on SVGs */
    '& path': {
        fill: isSelected ? 'url(#icon-gradient)' : 'currentColor',
    },
    /**FIX: Stroke-based icons (Solar/Phosphor)
    *  Prevents icons from becoming solid blocks by removing 'fill' 
    *  and applying 'stroke' for a clean, outline look.*/
    '& .iconify--solar': {
        '& path': {
            fill: 'none !important',
            stroke: isSelected ? 'url(#icon-gradient)' : 'currentColor',
            strokeWidth: '1.5px',
        }
    },
});

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
                    variant="blueGradient"
                    noWrap
                    sx={{
                        ml: '10px',
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        letterSpacing: '-0.02em',
                        lineHeight: 1,
                        userSelect: 'none'
                    }}>
                        NextStep
                </Typography>
            </Toolbar>

            <Box component="nav" sx={{ flexGrow: 1, overflow: 'auto', mt: 4 }}>

                <Typography variant="caption" sx={{ pl: 2, color: 'text.secondary', fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: '1rem', lineHeight: '100%' }}>
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