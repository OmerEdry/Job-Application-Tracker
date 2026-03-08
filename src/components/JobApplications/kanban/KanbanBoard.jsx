import { Box, } from '@mui/material';
import KanbanColumn from './KanbanColumn';
import { Headers } from '#@/utils/kanbanConfig';




const KanbanBoard = ({ jobsData }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',

                height: '100%',
                gap: '41px',
                overflow: 'auto',
                borderRadius: 2,
                bgcolor: 'background.paper',


            }}>
            {Headers.map(head => (
                <KanbanColumn
                    key={head.name}
                    header={head}
                    jobCards={jobsData.filter(job => job.status == head.name.toLowerCase())}
                />
            ))}
        </Box>
    )
}

export default KanbanBoard;