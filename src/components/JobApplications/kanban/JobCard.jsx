import BaseKanbanCard from "./BaseKanbanCard";

const JobCard = ({ job }) => {
    return (
        <BaseKanbanCard
            sx={(theme) => ({
                background: theme.gradients[job.status],
                border: 0,
            })}
        />
    )
}

export default JobCard;