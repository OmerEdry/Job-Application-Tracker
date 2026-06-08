import React, { useState } from 'react';
import {
    Drawer as MuiDrawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Box,
    Typography,
    useTheme,
    ListItemIcon,
    IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import { sidebarItems, SIDEBAR_WIDTH, SIDEBAR_COLLAPSED_WIDTH } from '../../utils/sidebarConfig';
import { SidebarIcons } from '../../assets/icons';
import Logo from '../../assets/Logo';
import { navItemsStyles, getNavTextStyle, getIconStyle } from '../../styles/SidebarStyle';


const openedMixin = (theme) => ({
    width: SIDEBAR_WIDTH,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: SIDEBAR_COLLAPSED_WIDTH,
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const location = useLocation();
    const theme = useTheme();

    const isSettingSelected = location.pathname === '/settings';

    return (
        <Drawer variant="permanent" open={open}>
            {/* Toolbar */}
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
                    sx={{
                        fontFamily: '"Space Grotesk", "sans-serif"',
                        fontWeight: 700,
                        fontSize: '25.36px',
                        lineHeight: 1,
                        userSelect: 'none',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        opacity: open ? 1 : 0,
                        maxWidth: open ? '200px' : 0,
                        ml: open ? '10px' : 0,
                        transition: theme.transitions.create(['opacity', 'max-width', 'margin'], {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                    }}>
                    NextStep
                </Typography>
            </Toolbar>

            {/* Main Navigation */}
            <Box component="nav" sx={{ flexGrow: 1, overflowY: 'auto', overflowX: 'hidden', mt: 4 }}>

                <Typography
                    variant="caption"
                    sx={{
                        pl: 2,
                        color: 'text.secondary',
                        display: 'block',
                        mb: 1,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        opacity: open ? 1 : 0,
                        maxWidth: open ? '100px' : 0,
                        transition: theme.transitions.create(['opacity', 'max-width'], {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                    }}
                >
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
                                    sx={navItemsStyles(isSelected, theme, !open)}
                                >
                                    <ListItemIcon sx={getIconStyle(isSelected, theme, !open)}>
                                        <IconComponent />
                                    </ListItemIcon>

                                    <ListItemText
                                        primary={item.text}
                                        slotProps={{ primary: { noWrap: true } }}
                                        sx={{
                                            ...getNavTextStyle(isSelected, theme, !open),
                                            overflow: 'hidden',
                                            opacity: open ? 1 : 0,
                                            maxWidth: open ? '200px' : 0,
                                            transition: theme.transitions.create(['opacity', 'max-width'], {
                                                easing: theme.transitions.easing.sharp,
                                                duration: theme.transitions.duration.enteringScreen,
                                            }),
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>

            <Box sx={{
                mt: 'auto',
                display: 'flex',
                flexDirection: !open ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: !open ? 'center' : 'space-between',
                px: !open ? 0 : 2,
                py: 2,
                borderTop: '1px solid',
                borderColor: 'divider',
                transition: theme.transitions.create(['padding', 'flex-direction', 'justify-content'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            }}>
                {/* Settings Item */}
                <ListItem disablePadding sx={{ width: 'auto' }}>
                    <ListItemButton
                        component={Link}
                        to="/settings"
                        selected={isSettingSelected}
                        sx={navItemsStyles(isSettingSelected, theme, !open)}
                    >
                        <ListItemIcon sx={getIconStyle(isSettingSelected, theme, !open)}>
                            <SidebarIcons.Settings />
                        </ListItemIcon>
                        <ListItemText
                            primary="Settings"
                            slotProps={{ primary: { noWrap: true } }}
                            sx={{
                                ...getNavTextStyle(isSettingSelected, theme, !open),
                                overflow: 'hidden',
                                opacity: open ? 1 : 0,
                                maxWidth: open ? '150px' : 0,
                                transition: theme.transitions.create(['opacity', 'max-width'], {
                                    easing: theme.transitions.easing.sharp,
                                    duration: theme.transitions.duration.enteringScreen,
                                }),
                            }}
                        />
                    </ListItemButton>
                </ListItem>

                {/* Toggle Button */}
                <IconButton
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
                    sx={{
                        color: 'text.primary',
                        mt: !open ? 1 : 0,
                        p: 1,
                        '& svg': {
                            fontSize: !open ? '30px' : '25px'
                        },
                        '&:focus, &:active, &.Mui-focusVisible': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    {open ? <SidebarIcons.SideBarClose /> : <SidebarIcons.SideBarOpen />}
                </IconButton>
            </Box>
        </Drawer>
    );
};

export default Sidebar;