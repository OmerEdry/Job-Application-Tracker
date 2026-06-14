import { useState, useEffect } from 'react';
import ToggleJobsView from "./ToggleJobsView";
import KanbanBoard from "./kanban/KanbanBoard";
import { Box } from "@mui/material";
import { fetchApplications } from "../../utils/apiService"; 
import { mapBackendToBoard } from "../../utils/jobAdapter"; 
import { useNotification } from "../../context/NotificationContext";

export const JobApplications = () => {
    const [view, setView] = useState('kanbanView');
    const [jobs, setJobs] = useState([]);
    const { showNotification } = useNotification();

    useEffect(() => {
        const loadJobs = async () => {
            try {
                const rawJobs = await fetchApplications();
                const adaptedJobs = mapBackendToBoard(rawJobs);
                setJobs(adaptedJobs);
            } catch (error) {
                console.error("Failed to load jobs:", error);
                showNotification("Failed to load job applications from server", "error");
            }
        };

        loadJobs();
    }, [showNotification]);

    const handleToggleView = (event, newView) => {
        if (newView !== null) {
            setView(newView);
        }
    };

    console.log("Current Jobs State:", jobs);
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
                <KanbanBoard jobsData={jobs} />
            ) : (
                <Box sx={{ height: '100%' }}>List View Placeholder</Box>
            )}
        </Box>
    );
};