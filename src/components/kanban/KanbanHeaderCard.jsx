import { CardHeader, Box, IconButton } from '@mui/material';
import BaseKanbanCard from './BaseKanbanCard';
import { AddIcon } from '../../assets/icons';


const HeaderCard = ({ header }) => {
    const themeColorPath = `${header.name.toLowerCase()}.primary`
    return (
        <BaseKanbanCard
            sx={{
                color: themeColorPath,
                borderColor: themeColorPath,
                border: '1px solid',
                bgcolor: 'transparent',
                height: 54
            }}>
            <CardHeader
                sx={{
                    padding: '8px 16px',
                    height: '100%',
                    '& .MuiCardHeaeder-content': {
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                    }
                }}
                avatar={header.icon}
                title={header.name}
                action={

                    <IconButton aria-label="add task" color="inherit">
                        <AddIcon />
                    </IconButton>
                }


                slotProps={{
                    title: {
                        variant: "h5",
                    },
                    action: {
                        sx: { alignSelf: 'center' }
                    }
                }
                }
            >
            </CardHeader>
        </BaseKanbanCard >
    )
}


export default HeaderCard;