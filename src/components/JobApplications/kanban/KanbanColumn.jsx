import { Box } from '@mui/material';
import KanbanHeaderCard from './KanbanHeaderCard';
import KanbanJobStack from './KanbanJobStack';
import EmptyJobCard from './EmptyJobCard';
import OfferEmptyState from './OfferEmptyState';

const KanbanColumn = ({ header, jobCards }) => {
    const isOfferColumn = header.name.toLowerCase() === 'offer';

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
            <KanbanHeaderCard header={header} />
            
            {jobCards.length > 0 ? (
                <KanbanJobStack>{jobCards}</KanbanJobStack>) : 
                (isOfferColumn ? <OfferEmptyState /> : <EmptyJobCard status={header.name.toLowerCase()} icon={header.icon} />
            )}
        </Box>
    );
};

export default KanbanColumn;