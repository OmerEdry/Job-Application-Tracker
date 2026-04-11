import { CardHeader, IconButton } from '@mui/material';
import BaseKanbanCard from './BaseKanbanCard';
import { AddIcon } from '#@/assets/icons';
import AddJobDialog from '../addJobDialog';
import { useState } from 'react';




const HeaderCard = ({ header }) => {
    const themeColorPath = `${header.name.toLowerCase()}.main`;

    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    const handleOpenAddJob = () => setIsAddDialogOpen(true);
    const handleCloseAddJob = () => setIsAddDialogOpen(false);

    return (
        <>
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

                        <IconButton
                            aria-label="add job"
                            onClick={handleOpenAddJob}
                            sx={{ color: "inherit", '&:focus:not(:focus-visible)': { outline: 'none' } }}>
                            <AddIcon />
                        </IconButton>
                    }


                    slotProps={{
                        title: {
                            sx: {
                                fontFamily: '"Space Grotesk", "sans-serif"',
                                fontWeight: 500,
                                fontSize: '28.7px',
                                letterSpacing: 0,
                                lineHeight: 1,
                            }
                        },
                        action: {
                            sx: { alignSelf: 'center', }
                        }
                    }
                    }
                />

            </BaseKanbanCard>
            <AddJobDialog
                isOpen={isAddDialogOpen}
                onClose={handleCloseAddJob}
                status={header.name}
            />
        </>
    )
}


export default HeaderCard;