import { ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";
import { ToggleViewIcons } from '#@/assets/icons';
import { ToggleGroupStyles } from '#@/styles/ToggleJobsViewStyle';



export default function ToggleJobsView({ view, onToggleView }) {
    return (
        <ToggleButtonGroup
            value={view}
            exclusive
            onChange={onToggleView}
            sx={ToggleGroupStyles}
        >
            <ToggleButton value="listView" className="icon-gradient-fill" aria-label="list view" >
                <ToggleViewIcons.ListView />
                <Typography>List</Typography>
            </ToggleButton>
            <ToggleButton value="kanbanView" className="icon-gradient-stroke" aria-label="kanban view">
                <ToggleViewIcons.KanbanView />
                <Typography >Kanban</Typography>
            </ToggleButton>
        </ToggleButtonGroup>
    )
}