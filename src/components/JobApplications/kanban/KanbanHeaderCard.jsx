import { CardHeader, IconButton } from '@mui/material';
import BaseKanbanCard from './BaseKanbanCard';
import { AddIcon } from '#@/assets/icons';


const HeaderCard = ({ header }) => {
    const themeColorPath = `${header.name.toLowerCase()}.primary`
    return (
        <BaseKanbanCard
            sx={{
                color: themeColorPath,
                borderColor: themeColorPath,
                bgcolor: 'transparent',
                height: 54
            }}>
            <CardHeader
                sx={{
                    padding: '8px 16px',
                    height: '100%',
                    '& .MuiCardHeader-content': {
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                    }
                }}
                avatar={header.icon}
                title={header.name}
                action={

                    <IconButton aria-label="add task"
                        sx={{ color: "inherit", '&:focus:not(:focus-visible)': { outline: 'none' } }}>
                        <AddIcon />
                    </IconButton>
                }


                slotProps={{
                    title: {
                        variant: "h5",
                    },
                    action: {
                        sx: { alignSelf: 'center', }
                    }
                }
                }
            />

        </BaseKanbanCard >
    )
}


export default HeaderCard;