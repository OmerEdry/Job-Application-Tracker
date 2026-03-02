import { Box, } from '@mui/material';
import KanbanColumn from './KanbanColumn';
import { mockJobsData } from '../../mockJobs/mockJobs';
import { Headers } from '../../utils/kanbanConfig';




const KanbanBoard = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                padding: 2,
                gap: '41px',
                overflowX: 'auto',
                borderRadius: 2,
                bgcolor: 'background.paper',
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',

            }}>
            {Headers.map(head => (
                <KanbanColumn
                    key={head.name}
                    header={head}
                    jobCards={mockJobsData}
                />
            ))}
        </Box>
    )
}

export default KanbanBoard;