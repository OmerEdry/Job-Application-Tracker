import { CardHeader, Box, IconButton } from '@mui/material';
import BaseKanbanCard from './BaseKanbanCard';


const HeaderCard = ({ name }) => {
    const lowerCaseName = name.toLowerCase();
    return (
        <BaseKanbanCard
            sxOverrides={(theme) => ({
                color: `${theme.palette[lowerCaseName].primary}`,
                border: '1px solid',
                borderColor: `${lowerCaseName}.primary`,
                bgcolor: 'transparent',
                height: 54
            })}>
            <CardHeader
                sx={{
                    padding: '8px 16px',
                    height: '100%',
                }}

                avatar={
                    <Box
                        sx={{
                            width: 24,
                            height: 24,

                            bgcolor: `${lowerCaseName}.primary`,
                            mask: `url(src/assets/mainSectionIcons/${lowerCaseName}.svg) no-repeat center`,
                            WebkitMask: `url(src/assets/mainSectionIcons/${lowerCaseName}.svg) no-repeat center`,
                        }}
                        alt='headerIcon'
                    />
                }

                title={name}

                action={
                    <IconButton arial-label="add task">
                        <Box
                            sx={{
                                width: 14,
                                height: 14,
                                bgcolor: `${lowerCaseName}.primary`,
                                mask: `url(src/assets/mainSectionIcons/add.svg) no-repeat center / contain`,
                                WebkitMask: `url(src/assets/mainSectionIcons/add.svg) no-repeat center / contain`,
                            }}
                            alt='addIcon'
                        />
                    </IconButton>
                }
                slotProps={{
                    title: {
                        sx: {
                            fontSize: 'medium',
                            fontWeight: 'bold',

                        }

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