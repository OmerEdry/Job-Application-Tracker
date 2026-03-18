import { Box, Typography } from '@mui/material';
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
                gap: 1.5,
                p: 2
            })}
        >
            {/* Header: Company info */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {/* Logo*/}
                <Box
                    component="img"
                    src={job.companyLogo}
                    alt={job.companyName}
                    sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '8px',
                        bgcolor: 'white',
                        objectFit: 'contain',
                        flexShrink: 0
                    }}
                />

                <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                    <Typography variant="jobCardCompany">
                        {job.companyName}
                    </Typography>

                    <Typography variant="jobCardInfo" noWrap>
                        {job.jobTitle}{job.location ? `, ${job.location}` : ''}
                    </Typography>
                </Box>
            </Box>

            {/* Body: Skill Tags */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {job.tags?.map((tag, index) => (
                    <SkillTag key={index} label={tag} />
                ))}
            </Box>
        </BaseKanbanCard>
    )
}

export default JobCard;