import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Typography, ListItemIcon } from '@mui/material';
import { MenuIcons } from '../../assets/icons';


const MENU_OPTIONS = [
    { key: 'edit', label: 'Edit', color: 'text.primary' },
    { key: 'move', label: 'Move To...', color: 'text.primary' },
    { key: 'delete', label: 'Delete', color: 'error.main' },
];

export default function JobMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <IconButton
                aria-label="job menu"
                id="job-menu-button"
                aria-controls={open ? 'job-menu-button' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{ '&:focus': { outline: 'none' } }}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="job-menu-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >

                <MenuList >
                    {MENU_OPTIONS.map((option) => (
                        <MenuItem
                            key={option.key}
                            onClick={handleClose}
                            sx={{ color: option.color }}
                        >
                            <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>
                                {MenuIcons[option.key]}
                            </ListItemIcon>
                            <Typography variant="subtitle1" color="inherit">
                                {option.label}
                            </Typography>
                        </MenuItem>
                    ))}

                </MenuList>
            </Menu>

        </React.Fragment>
    )
}