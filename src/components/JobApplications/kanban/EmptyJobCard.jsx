import BaseKanbanCard from "./BaseKanbanCard";
import { Typography, Box } from '@mui/material';
 

const getDashedBorder = (color) => {
    const svg = `%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='${encodeURIComponent(color)}' stroke-width='2' stroke-dasharray='16%2c 16' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e`;
    return `url("data:image/svg+xml,${svg}")`;
};

const EMPTY_COLUMN_MESSAGES = {
    wishlist: "Drag Your First Item To The Wishlist Here!",
    applied: "Drag Your First Application Here!",
    interviewing: "Drag Your First Interview Here!",
};

const EmptyJobCard = ({ status, icon }) => {
    const message = EMPTY_COLUMN_MESSAGES[status];

    return (
        <BaseKanbanCard
            sx={(theme) => ({
                background: theme.palette[status].gradient,
                width: 335,
                height: 196,
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                border: 'none',
                p: '35px 24px',
                gap: 1.2,
                
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 'inherit',
                    backgroundImage: getDashedBorder(theme.palette[status].primary),
                    pointerEvents: 'none',
                }
            })}
        >
            <Box sx={(theme) => ({ 
                color: theme.palette[status].primary,
                display: 'flex',
                '& .MuiSvgIcon-root, & .iconify': { fontSize: 66 } 
            })}>
                {icon}
            </Box>
            
            <Typography 
                sx={(theme) => ({
                    color: theme.palette[status].primary,
                    fontFamily: theme.typography.h5.fontFamily, 
                    fontSize: '18px',
                    fontWeight: 500,
                    textAlign: 'center',
                    maxWidth: 267
                })}
            >
                {message}
            </Typography>
        </BaseKanbanCard>
    );
};

export default EmptyJobCard;