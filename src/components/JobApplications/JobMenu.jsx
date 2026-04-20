import { useState, startTransition } from 'react';
import { Box, IconButton, Menu, MenuItem, ListItemIcon, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MenuIcons } from '../../assets/icons';
import EditJobDialog from './EditJobDialog';
import MoveJobDialog from './MoveJobDialog';
import DeleteJobDialog from './DeleteJobDialog';


const MENU_OPTIONS = [
    { key: 'edit', label: 'Edit', color: 'text.primary' },
    { key: 'move', label: 'Move To...', color: 'text.primary' },
    { key: 'delete', label: 'Delete', color: 'error.main' },
];

export default function JobMenu({ job }) {
    // Menu State
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    // Dialog State
    const [activeDialog, setActiveDialog] = useState(null);

    // Menu Handlers
    const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
    const handleCloseMenu = () => setAnchorEl(null);

    // Dialog Handlers
    const handleOpenDialog = (dialogName) => {
        handleCloseMenu();
        startTransition(() => {
            setActiveDialog(dialogName);
        });
    };

    const handleCloseDialog = () => {
        setActiveDialog(null);
    };

    return (
        <Box>
            <IconButton
                variant="contained"
                id="job-menu-button"
                onClick={handleOpenMenu}
                aria-label="job menu"
                aria-controls={isMenuOpen ? 'job-menu-button' : undefined}
                aria-expanded={isMenuOpen ? 'true' : undefined}
                aria-haspopup="true"


            >
                <MoreVertIcon />
            </IconButton>

            <Menu
                id="job-menu"
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleCloseMenu}
            >

                {MENU_OPTIONS.map((option) => (
                    <MenuItem
                        key={option.key}
                        onClick={() => handleOpenDialog(option.key)}
                        sx={{ color: option.color }}
                    >
                        <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>
                            {MenuIcons[option.key]}
                        </ListItemIcon>
                        <Typography variant='subtitle1' color="inherit">
                            {option.label}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>

            <EditJobDialog
                isOpen={activeDialog === 'edit'}
                onClose={handleCloseDialog}
                job={job}
            />
            <MoveJobDialog
                isOpen={activeDialog === 'move'}
                onClose={handleCloseDialog}
                job={job}
            />

            <DeleteJobDialog
                isOpen={activeDialog === 'delete'}
                onClose={handleCloseDialog}
                job={job}
            />
        </Box>
    )
}