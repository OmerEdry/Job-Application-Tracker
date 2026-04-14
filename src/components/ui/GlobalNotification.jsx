import React from 'react';
import { Snackbar, Alert, Slide, Box, Typography } from '@mui/material';
import { useNotification } from '../../context/NotificationContext';
import { NotificationIcons } from '../../assets/icons';

const STATUS_TITLES = {
    success: 'Success',
    error: 'Error',
    warning: 'Warning',
    info: 'Info'
};

const TransitionUp = (props) => <Slide {...props} direction="up" />;

const GlobalNotification = () => {
    const { notification, hideNotification } = useNotification();
    const { open, message, severity } = notification;

    return (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={hideNotification}
            slots={{ transition: TransitionUp }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            sx={{ mb: 3, mr: 3 }}
        >
            <Alert
                onClose={hideNotification}
                severity={severity}
                variant="standard" 
                icon={NotificationIcons[severity]}
                sx={{ 
                    width: '488px',         
                    minHeight: '90px',      
                    borderRadius: '20px',    
                    padding: '15px 20px',   
                    bgcolor: 'background.paper',
                    boxShadow: (theme) => theme.alertShadows?.alert,
                    display: 'flex',
                    alignItems: 'center',
        
                    '& .MuiAlert-icon': {
                        padding: 0,
                        marginRight: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        '& svg': {
                            width: '32px',
                            height: 'auto'
                        }
                    },
        
                    '& .MuiAlert-action': {
                        padding: 0,
                        color: 'text.primary',
                        opacity: 0.6
                    }
                }}
            >
                <Box>
                    <Typography variant="h1" sx={{ color: 'text.primary', mb: 0.5 }}>
                        {STATUS_TITLES[severity]}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                        {message}
                    </Typography>
                </Box>
            </Alert>
        </Snackbar>
    );
};

export default GlobalNotification;