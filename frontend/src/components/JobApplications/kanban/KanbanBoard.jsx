import { Box, } from '@mui/material';
import KanbanColumn from './KanbanColumn';
import { Headers } from '#@/utils/kanbanConfig';




const KanbanBoard = ({ jobsData }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '41px',
                height: '100%',
                borderRadius: 2,
                overflow: 'auto',
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