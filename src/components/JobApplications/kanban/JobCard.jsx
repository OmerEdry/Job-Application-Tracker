import { Box, CardActions, Typography, CardHeader, Avatar, CardContent, CardActionArea, Tooltip } from '@mui/material';
import BaseKanbanCard from "./BaseKanbanCard";
import SkillTag from "./SkillTag";
import { getRelativeTime, isFollowUpRecommended } from '../../../utils/helpers';
import { TimeIcon, FollowUpIcon } from "../../../assets/icons";
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

                action={<JobMenu job={job} />}

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
            <CardActions sx={{ px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <TimeIcon sx={{ color: 'text.secondary', fontSize: '18px' }} />
                    <Typography variant="subtitle3" sx={{ color: 'text.secondary' }}>
                        {getRelativeTime(job.createdAt)}
                    </Typography>
                </Box>

                {isFollowUpRecommended(job.createdAt) && (
                    <Tooltip
                        title="Follow Up Recommended"
                        arrow
                        placement="bottom"
                        slotProps={{
                            tooltip: {
                                sx: {
                                    bgcolor: 'alert.main',
                                    padding: '6px 18px',
                                    fontWeight: 700,
                                    fontSize: '13.71px',
                                },
                            },
                            arrow: {
                                sx: { color: 'alert.main' },
                            },
                        }}
                    >
                        <Box sx={{ display: 'flex' }}>
                            <FollowUpIcon sx={{ color: 'alert.main' }} />
                        </Box>
                    </Tooltip>
                )}
            </CardActions>
        </BaseKanbanCard >
    )
}

export default JobCard;