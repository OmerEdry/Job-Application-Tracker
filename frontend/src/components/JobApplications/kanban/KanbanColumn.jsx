import { Box } from '@mui/material';
import KanbanHeaderCard from './KanbanHeaderCard';
import KanbanJobStack from './KanbanJobStack';
import EmptyJobCard from './EmptyJobCard';
import OfferEmptyState from './OfferEmptyState';

const KanbanColumn = ({ header, jobCards, onRefresh }) => {
    const isOfferColumn = header.name.toLowerCase() === 'offer';

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
            <KanbanHeaderCard header={header} onRefresh={onRefresh} />
            
            {jobCards.length > 0 ? (<KanbanJobStack onRefresh={onRefresh}>{jobCards}</KanbanJobStack>
            ) : (
                isOfferColumn ? (
                    <OfferEmptyState onRefresh={onRefresh} />
                ) : (
                    <EmptyJobCard status={header.name.toLowerCase()} icon={header.icon} onRefresh={onRefresh} />
                )
            )}
        </Box>
    );
};

export default KanbanColumn;