import { useState, useEffect } from "react";
import { Box, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import SecondaryButton from './controls/SecondaryButton';
import PrimaryButton from "./controls/PrimaryButton";
import InputField from "./controls/Input";

const DEFAULT_VALUES = {};

export default function BaseForm({
    isOpen,
    onClose,
    title,
    fields = [],
    initialValues = DEFAULT_VALUES,
    onSubmit,
    onSecondaryAction,
    buttons = { submit: 'Save', secondary: 'Cancel' },
    children
}) {
    const [formData, setFormData] = useState(initialValues);

    useEffect(() => {
        if (isOpen) setFormData(initialValues);
    }, [initialValues, isOpen]);

    const handleInputChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (onSubmit) onSubmit(formData);
    };

    const handleSecondary = () => {
        if (onSecondaryAction) {
            onSecondaryAction(formData);
        }
        onClose();
    };

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            fullWidth
            maxWidth='md'
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: '15px',
                        elevation: 0,
                        boxShadow: 'none'
                    }
                }
            }}
        >
            <Box component='form' onSubmit={handleSubmit} sx={{ px: 1 }}>
                <DialogTitle variant='h1' sx={{ pt: 4, pb: 3 }}>
                    {title}
                </DialogTitle>

                <DialogContent>
                    <Grid container spacing={3}>
                        {children}

                        {fields.map((field) => (
                            <Grid key={field.name} size={{ xs: 6 }}>
                                <InputField
                                    field={field}
                                    value={formData[field.name]}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </DialogContent>

                <DialogActions sx={{ px: 3, pb: 4, gap: 2 }}>
                    <SecondaryButton onClick={handleSecondary} label={buttons.secondary} />
                    <PrimaryButton type="submit" label={buttons.submit} />
                </DialogActions>
            </Box>
        </Dialog>
    );
}