import { useState, useMemo } from "react";
import { Typography, Box, Grid, Dialog, DialogTitle, DialogContent, DialogActions, FormLabel, Autocomplete, TextField } from "@mui/material";
import { STATUS_FIELDS_CONFIG, STATUSES } from "./jobsConfig";
import SecondaryButton from '../controls/SecondaryButton';
import PrimaryButton from "../controls/PrimaryButton";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";



const getDefaultNewStatus = (currentStatus) => {
    if (currentStatus === 'Offer') return 'Interviewing';
    const currentIndex = STATUSES.indexOf(currentStatus);
    return STATUSES[currentIndex + 1] || STATUSES[0];
};

const capitalize = (str) => {
    if (!str || typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export default function MoveJobDialog({ isOpen, onClose, job = {}, onSave }) {
    const normalizedJobStatus = capitalize(job.status);
    const currentStatus = STATUSES.includes(normalizedJobStatus) ? normalizedJobStatus : STATUSES[0];
    const [newStatus, setNewStatus] = useState(() => getDefaultNewStatus(currentStatus));

    const [formData, setFormData] = useState(job);

    const handleInputChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data to  Submit:', formData);
        const updateJob = {
            ...formData,
            status: newStatus.toLowerCase()
        };

        if (onSave) {
            onSave(updateJob);
        }
    };

    const extraFieldsToRender = useMemo(() => {

        if (!newStatus) return [];
        const currentIndex = STATUSES.indexOf(currentStatus);
        const newIndex = STATUSES.indexOf(newStatus);

        if (newIndex <= currentIndex) {
            return [];
        }

        let fields = [];
        for (let i = currentIndex + 1; i <= newIndex; i++) {
            const stage = STATUSES[i];

            if (STATUS_FIELDS_CONFIG[stage]) {
                fields = [...fields, ...STATUS_FIELDS_CONFIG[stage]];
            }
        }
        return fields;
    }, [currentStatus, newStatus]);

    const renderField = (field) => {
        const value = formData[field.name] || (field.multiple ? [] : '');
        const normalizedType = field.type;

        if (normalizedType === 'autocomplete') {
            return (

                <Box key={field.name}>
                    <FormLabel required={field.required} sx={{ display: 'block', color: 'text.primary' }}>
                        <Typography variant='input'>
                            {field.label}
                        </Typography>
                    </FormLabel>
                    <Autocomplete
                        multiple={field.multiple}
                        freeSolo={field.freeSolo}
                        options={field.options || []}
                        limitTags={field.limitTags}
                        value={value}
                        onChange={(event, newValue) => handleInputChange(field.name, newValue)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                hiddenLabel
                                placeholder={field.placeholder}
                                required={field.required}
                                variant='outlined'
                                size='small'
                                fullWidth
                            />
                        )}
                    />
                </Box>
            );
        }

        if (normalizedType === 'date') {
            return (
                <Box key={field.name}>
                    <FormLabel required={field.required} sx={{ display: 'block', color: 'text.primary' }}>
                        <Typography variant='input'>
                            {field.label}
                        </Typography>
                    </FormLabel>
                    <DatePicker
                        views={['year', 'month', 'day']}
                        value={value ? dayjs(value) : null}
                        onChange={(newValue) => {
                            handleInputChange(field.name, (newValue || null));
                        }}
                        slotProps={{
                            textField: {
                                fullWidth: true,
                                size: 'small',
                                required: field.required,
                            }
                        }}
                    />
                </Box>
            )
        }
        return (
            <Box key={field.name}>
                <FormLabel required={field.required} sx={{ display: 'block', color: 'text.primary' }}>
                    <Typography variant='input'>
                        {field.label}
                    </Typography>
                </FormLabel>
                <TextField
                    key={field.name}
                    type={normalizedType}
                    value={value}
                    onChange={(event) => handleInputChange(field.name, event.target.value)}
                    required={field.required}
                    variant='outlined'
                    size='small'
                    fullWidth
                />
            </Box>
        );
    };


    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            fullWidth
            maxWidth='sm'
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: '15px',
                        elevation: 0,
                        boxShadow: 'none'
                    }
                }
            }} >
            <Box component='form' onSubmit={handleSubmit} sx={{ px: 1 }}>

                <DialogTitle variant='h1' sx={{ pt: 4, pb: 3 }}>Move Job Status</DialogTitle>

                <DialogContent>
                    <Grid container spacing={3} >
                        <Grid size={{ xs: 6 }}>
                            <FormLabel sx={{ display: 'block', color: 'text.primary' }}>
                                <Typography variant='input'>
                                    Current Status
                                </Typography>
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
                                <Typography variant='input'>
                                    New Status
                                </Typography>
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

                        {/* Dynamic Fields Section */}
                        {extraFieldsToRender.length > 0 && (
                            <Grid size={{ xs: 12 }}>
                                <Typography variant='h2' color='text.primary' sx={{ my: 2 }}>
                                    {`Required For ${newStatus} Stage`}
                                </Typography>

                                <Grid container rowSpacing={1} columnSpacing={3} >
                                    {extraFieldsToRender.map((field, index) => (
                                        <Grid key={`${field.name}-${index}`} size={{ xs: 6, }}>
                                            {renderField(field)}
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </DialogContent>

                {/* Form buttons */}
                <DialogActions sx={{ px: 3, pb: 4, gap: 2 }}>
                    <SecondaryButton onClick={onClose} label='Cancel' />
                    <PrimaryButton label='Move Job' />
                </DialogActions>

            </Box>
        </ Dialog >
    )
}
