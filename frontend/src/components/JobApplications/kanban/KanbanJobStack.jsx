import { Stack } from '@mui/material';
import JobCard from './JobCard';

const KanbanJobStack = ({ children, onRefresh }) => {
    return (
        <Stack sx={{
            flexGrow: 1, overflow: 'auto', gap: 2,
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
        }} >
            {
                children.map(job => (
                    <JobCard
                        key={job.id}
                        job={job} 
                        onRefresh={onRefresh}
                    />
                ))
            }
        </Stack >
    )
}

export default KanbanJobStack;