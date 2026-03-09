import { Stack } from '@mui/material';
import JobCard from './JobCard';


const KanbanJobStack = ({ children }) => {
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
                        job={job} />
                ))
            }
        </Stack >
    )
}

export default KanbanJobStack;
