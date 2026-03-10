import { Box } from '@mui/material';
import KanbanHeaderCard from './KanbanHeaderCard';
import KanbanJobStack from './KanbanJobStack';
import EmptyJobCard from './EmptyJobCard';


const KanbanColumn = ({ header, jobCards }) => {
    return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,ht: '100%' }}>
        <KanbanHeaderCard header={header} />
        {jobCards.length > 0 ? 
        (<KanbanJobStack>{jobCards}</KanbanJobStack>) :
        (<EmptyJobCard status={header.name.toLowerCase()} icon={header.icon} />)}
    </Box>
)
}

export default KanbanColumn;