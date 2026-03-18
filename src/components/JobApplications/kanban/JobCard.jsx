import { Box } from '@mui/material';
import BaseKanbanCard from "./BaseKanbanCard";
import SkillTag from "./SkillTag";

const JobCard = ({ job }) => {
    return (
        <BaseKanbanCard
            sx={(theme) => ({
                background: theme.palette[job.status].gradient,
                border: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                p: 2 
            })}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {job.tags?.map((tag, index) => (
                    <SkillTag key={index} label={tag} />
                ))}
            </Box>
        </BaseKanbanCard>
    )
}

export default JobCard;