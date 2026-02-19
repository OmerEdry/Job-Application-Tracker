import { Box, Stack } from '@mui/material';
import KanbanHeader from './KanbanHeader';
/* add import jobCard here */

const KanbanColumn = ({ header, jobCards, colWidthProp }) => {
    return (
        <Box
            sx={{
                width: colWidthProp,
                minWidth: 250,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                mx: 1,
                py: 1,
                px: 0,
                gap: 2,
            }}
        >

            <KanbanHeader
                name={header.name}
                color={header.color}
            />

            <Stack
                sx={{
                    minHeight: 0,
                    flexGrow: 1, overflow: 'auto',
                    p: 0,
                    bgcolor: 'transparent'
                }}>

            </Stack>
        </Box>
    )
}

export default KanbanColumn;