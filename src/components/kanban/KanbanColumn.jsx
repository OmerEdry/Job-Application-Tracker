import { Box } from '@mui/material';
import KanbanHeader from './HeaderCard';
import KanbanJobStack from './KanbanJobStack';


const KanbanColumn = ({ header, jobCards }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, py: 2, px: 2 }}>
            <KanbanHeader name={header.name} />
            <KanbanJobStack>
                {jobCards}
            </KanbanJobStack>
        </Box>
    )
}

export default KanbanColumn;