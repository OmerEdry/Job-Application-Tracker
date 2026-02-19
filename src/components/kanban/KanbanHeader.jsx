import { Card, CardHeader, Box, IconButton } from '@mui/material';


const KanbanHeader = ({ name, color }) => {
    const lowerCaseName = name.toLowerCase();
    return (
        <Card
            elevation={0}
            sx={{
                width: '100%',
                minWidth: 300,
            }}
        >
            <CardHeader
                avatar={
                    <Box
                        sx={{
                            width: 24,
                            height: 24,
                            display: 'block',
                            bgcolor: `${color}`,
                            mask: `url(src/assets/mainSectionIcons/${lowerCaseName}.svg) no-repeat center`,
                            WebkitMask: `url(src/assets/mainSectionIcons/${lowerCaseName}.svg) no-repeat center`,
                        }}
                        alt='headerIcon'
                    />
                }

                title={name}
                sx={{
                    border: 1,
                    borderColor: color,
                    borderRadius: 2,
                    color: `${color}`,
                    boxShadow: 'none',
                    padding: 1,
                }}
                action={
                    <IconButton arial-label="add task">
                        <Box
                            sx={{
                                width: 18,
                                height: 18,
                                display: 'block',
                                bgcolor: `${color}`,
                                mask: `url(src/assets/mainSectionIcons/add.svg) no-repeat center / contain`,
                                WebkitMask: `url(src/assets/mainSectionIcons/add.svg) no-repeat center / contain`,
                            }}
                            alt='addIcon'
                        />
                    </IconButton>
                }>

            </CardHeader>
        </Card >

    )
}



export default KanbanHeader;
