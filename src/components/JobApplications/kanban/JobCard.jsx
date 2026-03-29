import { Box, Typography } from '@mui/material';
import BaseKanbanCard from "./BaseKanbanCard";
import SkillTag from "./SkillTag";
import { getRelativeTime } from '../../../utils/helpers';
import { TimeIcon } from "../../../assets/icons";

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
                {/*Logo*/}
                <Box
                    component="img"
                    src={job.companyLogo}
                    alt={job.companyName}
                    sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '8px',
                        bgcolor: 'transparent',
                        objectFit: 'contain',
                        flexShrink: 0,
                        p: 0.5
                    }}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://www.google.com/s2/favicons?domain=${job.companyName.toLowerCase().replace(/\s+/g, '')}.com&sz=128`;
                    }}
                />
                {/*Job info*/}
                <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0, gap: 0.5 }}>
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
                {job.tags?.map((tag) => (
                    <SkillTag key={tag} label={tag} />
                ))}
            </Box>

            {/* Footer: Time stamps */}
            <Box sx={{
                mt: 'auto',
                pt: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
            }}>
                
                <TimeIcon sx={{ color: 'text.secondary', fontSize: '18px' }} />

                <Typography
                    variant="jobCardInfo" 
                    sx={{
                        color: 'text.secondary',
                        lineHeight: 1
                    }}
                >
                    {getRelativeTime(job.createdAt)}
                </Typography>
            </Box>
        </BaseKanbanCard>
    )
}

export default JobCard;