import React, { createContext, useState, useContext, useCallback } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState({
        open: false,
        message: '',
        severity: 'success',
    });

    const showNotification = useCallback((message, severity = 'success') => {
        setNotification({ open: true, message, severity });
    }, []);

    const hideNotification = useCallback(() => {
        setNotification((prev) => ({ ...prev, open: false }));
    }, []);

    return (
        <NotificationContext.Provider value={{ notification, showNotification, hideNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    const context = useContext(NotificationContext);
    return context; 
};