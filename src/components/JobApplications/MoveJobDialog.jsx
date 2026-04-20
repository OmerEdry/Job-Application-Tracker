import { useState, useMemo } from "react";
import { Typography, Grid, FormLabel, Autocomplete, TextField } from "@mui/material";
import { STATUSES, capitalize, getFieldsBetweenStatuses } from "./jobsConfig";
import BaseForm from "../BaseForm";
import { useNotification } from "../../context/NotificationContext";

const getDefaultNewStatus = (currentStatus) => {
    if (currentStatus === 'Offer') return 'Interviewing';
    const currentIndex = STATUSES.indexOf(currentStatus);
    return STATUSES[currentIndex + 1] || STATUSES[0];
};

export default function MoveJobDialog({ isOpen, onClose, job = {}, onSave }) {
    const normalizedJobStatus = capitalize(job.status);
    const currentStatus = STATUSES.includes(normalizedJobStatus) ? normalizedJobStatus : STATUSES[0];
    const [newStatus, setNewStatus] = useState(() => getDefaultNewStatus(currentStatus));

    const { showNotification } = useNotification();

    const extraFields = useMemo(() => {
        return getFieldsBetweenStatuses(currentStatus, newStatus);
    }, [currentStatus, newStatus]);

    const handleSave = (formData) => {
        console.log('Form Data to Submit:', formData);
        const updateJob = {
            ...formData,
            status: newStatus.toLowerCase()
        };

        try {
            if (onSave) {
                onSave(updateJob);
                showNotification(`Successfully moved ${job.companyName} To ${newStatus}`, "success");
                onClose();
            }
        } catch (error) {
            console.error('Error saving job:', error);
            showNotification(`Failed to move ${job.companyName} To ${newStatus}`, "error");
        }
    };

    return (
        <BaseForm
            isOpen={isOpen}
            onClose={onClose}
            title="Move Job Status"
            fields={extraFields}
            initialValues={job}
            onSubmit={handleSave}
            buttons={{ submit: 'Move Job', secondary: 'Cancel' }}
        >

            <Grid size={{ xs: 6 }}>
                <FormLabel sx={{ display: 'block', color: 'text.primary' }}>
                    <Typography variant='input'>Current Status</Typography>
                </FormLabel>
                <Autocomplete
                    disabled
                    options={STATUSES}
                    value={currentStatus}
                    size='small'
                    fullWidth
                    renderInput={(params) => <TextField {...params} variant="outlined" />}
                />
            </Grid>

            <Grid size={{ xs: 6 }}>
                <FormLabel sx={{ display: 'block', color: 'text.primary' }}>
                    <Typography variant='input'>New Status</Typography>
                </FormLabel>
                <Autocomplete
                    options={STATUSES}
                    value={newStatus}
                    onChange={(event, newValue) => setNewStatus(newValue)}
                    size='small'
                    fullWidth
                    getOptionDisabled={(option) => option === currentStatus}
                    renderInput={(params) => <TextField {...params} variant='outlined' />}
                />
            </Grid>

            {extraFields.length > 0 && (
                <Grid size={{ xs: 12 }}>
                    <Typography variant='h2' color='text.primary' sx={{ my: 2 }}>
                        {`Required For ${newStatus} Stage`}
                    </Typography>
                </Grid>
            )}
        </BaseForm>
    );
}