import { Box, Grow, } from '@mui/material';
import KanbanColumn from './KanbanColumn';
import mockJobsData from '../../mockJobs/mockJobs';


const Headers = [
    { name: 'Wishlist' },
    { name: "Applied" },
    { name: 'Interviewing' },
    { name: 'Offer' },
];

const KanbanBoard = () => {


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: '100%',
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