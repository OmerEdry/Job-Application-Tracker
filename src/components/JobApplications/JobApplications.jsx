import { mockJobsData } from "#@/mockJobs/mockJobs";
import ToggleJobsView from "./ToggleJobsView";
import KanbanBoard from "./kanban/KanbanBoard";
import { Box } from "@mui/material";
import { useState } from 'react';



export const JobApplications = () => {
    const [view, setView] = useState('kanbanView');

    const handleToggleView = (event, newView) => {
        if (newView !== null) {
            setView(newView);
        }
    };
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                padding: 3,
                gap: 2,
                bgcolor: 'background.paper',
                borderRadius: 8,
                overflow: 'hidden',
            }}>
            <ToggleJobsView view={view} onToggleView={handleToggleView} />
            {view === 'kanbanView' ? (
                <KanbanBoard jobsData={mockJobsData} />
            ) : (
                <Box sx={{ height: '100%' }}>List View Placeholder</Box>
            )}
        </Box>
    )
}