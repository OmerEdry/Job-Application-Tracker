import { useState, useEffect } from 'react';
import { Typography, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button, FormLabel } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputField from './controls/Input';

export default function BaseForm({
    isOpen, onClose, title, fields, initialValues, onSubmit, onSecondaryAction, buttons, isLoading
}) {

    const [formData, setFormData] = useState(initialValues || {});

    const handleChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
    };


    if (!isOpen) return null;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
                <DialogTitle variant="h1">{title}</DialogTitle>
                <form onSubmit={handleSubmit}>

                    <DialogContent>
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                            {fields.map((field) => (
                                <Grid key={`${field.name}-grid`} size={{ xs: 12, sm: 6 }}>
                                    <FormLabel required={field.required} sx={{ mb: 1, display: 'block', color: 'text.primary' }}>
                                        <Typography variant='input'>
                                            {field.label}
                                        </Typography>
                                    </FormLabel>
                                    <InputField
                                        key={field.name}
                                        field={field}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </DialogContent>

                    <DialogActions sx={{ px: 3, pb: 3, pt: 1 }}>
                        <Grid container spacing={2} sx={{ width: '100%', m: 0 }}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Button
                                    fullWidth
                                    onClick={onSecondaryAction || onClose}
                                    disabled={isLoading}
                                    variant="outlined"
                                    sx={{
                                        borderColor: '#999999',
                                        color: 'text.primary',
                                    }}
                                >
                                    {buttons.secondary}
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Button
                                    fullWidth
                                    type="submit"
                                    disabled={isLoading}
                                    variant="contained"
                                    sx={{
                                        background: (theme) => theme.gradients?.primary,
                                        color: 'white',
                                        '&:hover': {
                                            opacity: 0.9
                                        }
                                    }}
                                >
                                    {isLoading ? 'Saving...' : `${buttons.submit}`}
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </form>
            </Dialog>
        </LocalizationProvider >
    )
}