import React from 'react';
import { useTheme } from '@mui/material/styles';

const IconStyle = () => {
    const theme = useTheme();

    return (
        <svg width="0" height="0" style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none' }}>
            <defs>
                <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="10%" stopColor={theme.palette.primary.main} />
                    <stop offset="80%" stopColor={theme.palette.primary.light} />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default IconStyle;