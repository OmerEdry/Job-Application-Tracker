import { Box } from '@mui/material';
import KanbanHeaderCard from './KanbanHeaderCard';
import KanbanJobStack from './KanbanJobStack';


const KanbanColumn = ({ header, jobCards }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <KanbanHeaderCard header={header} />
            <KanbanJobStack>
                {jobCards}
            </KanbanJobStack>
        </Box>
    )
}

export default KanbanColumn;