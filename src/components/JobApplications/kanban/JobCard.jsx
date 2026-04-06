import { Box, CardActions, Typography, CardHeader, Avatar, CardContent, CardActionArea } from '@mui/material';
import BaseKanbanCard from "./BaseKanbanCard";
import SkillTag from "./SkillTag";
import { getRelativeTime } from '../../../utils/helpers';
import { TimeIcon } from "../../../assets/icons";
import JobMenu from '../jobMenu';


const JobCard = ({ job }) => {
    return (
        <BaseKanbanCard
            sx={(theme) => ({
                background: theme.gradients[job.status],
                border: 0,
            })}
        >
            {/* Header: Company info */}
            <CardHeader
                avatar={<Avatar src={job.companyLogo} aria-label="Company Logo" sx={{ bgColor: 'transparent', }} />}

                action={<JobMenu />}

                title={<Typography variant="h4">{job.companyName}</Typography>}

                subheader={`${job.jobTitle}, ${job.location || job.workType}`}
            />

            {/* Content: Tags */}
            <CardContent sx={{ display: 'flex', flexDirection: 'column', }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>{job.tags?.map((tag) => (
                    <SkillTag key={tag} label={tag} />
                ))}
                </Box>
            </CardContent>

            {/* Footer: Time since added, follow-up alert, info */}
            <CardActions sx={{ px: 2 }}>
                <TimeIcon sx={{ color: 'text.secondary', fontSize: '18px' }} />
                <Typography variant="subtitle3" sx={{ color: 'text.secondary', }}>
                    {getRelativeTime(job.createdAt)}
                </Typography>

            </CardActions>
        </BaseKanbanCard >
    )
}

export default JobCard;