import React from 'react';
import { Snackbar, Alert, Slide } from '@mui/material';
import { useNotification } from '../../context/NotificationContext';

function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
}

const GlobalNotification = () => {
    const { notification, hideNotification } = useNotification();

    return (
        <Snackbar
            open={notification.open}
            autoHideDuration={4000}
            onClose={hideNotification}
            slots={{ transition: TransitionUp }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert 
                onClose={hideNotification} 
                severity={notification.severity} 
                variant="filled"
            >
                {notification.message}
            </Alert>
        </Snackbar>
    );
};

export default GlobalNotification;