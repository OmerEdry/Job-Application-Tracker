import BaseKanbanCard from "./BaseKanbanCard";

const JobCard = ({ job }) => {
    return (
        <BaseKanbanCard
            sxOverrides={(theme) => ({
                background: theme.palette[job.status].gradient,
                border: 0,
            })}
        />
    )
}

export default JobCard;