import { Autocomplete, TextField, Box, FormLabel, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";




export default function InputField({ field, value, onChange, disabled }) {
    const { name, label, placeholder, type, required, options, multiple, freeSolo, limitTags } = field;



    switch (type) {
        case 'autocomplete':
            return (
                <Box>
                    <FormLabel required={field.required} sx={{ display: 'block', color: 'text.primary' }}>
                        <Typography variant='input'>
                            {field.label}
                        </Typography>
                    </FormLabel>

                    <Autocomplete
                        multiple={multiple}
                        freeSolo={freeSolo}
                        limitTags={limitTags}
                        size='small'
                        options={options || []}
                        value={value !== undefined ? value : (multiple ? [] : null)}
                        onChange={(event, newValue) => onChange(name, newValue)}
                        disabled={disabled}

                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label={placeholder}
                                required={required}
                                size='small'
                                fullWidth
                                sx={{
                                    '& .MuiFormLabel-asterisk': {
                                        display: 'none',
                                    },
                                }}
                                slotProps={{
                                    inputLabel: {
                                        sx: {
                                            '&:not(.MuiInputLabel-shrink)': {
                                                transform: 'translate(14px, 7px) scale(1)',
                                            }
                                        }
                                    },
                                }}
                            />
                        )}
                        slotProps={{
                            popper: {
                                placement: 'bottom-start',
                                modifiers: [{ name: 'flip', enabled: false }]
                            },
                            inputLabel: { required: false },
                        }}
                    />
                </Box>
            );

        case 'date':
            return (
                <Box>
                    <FormLabel required={field.required} sx={{ display: 'block', color: 'text.primary' }}>
                        <Typography variant='input'>
                            {field.label}
                        </Typography>
                    </FormLabel>

                    <DatePicker
                        label={label}
                        value={value || null}
                        onChange={(newValue) => onChange(name, newValue)}
                        disabled={disabled}
                        slotProps={{
                            textField: {
                                fullWidth: true,
                                size: 'small',
                                required: required
                            },
                        }}
                        sx={{
                            '& .MuiFormLabel-asterisk': {
                                display: 'none',
                            },
                        }}
                    />
                </Box>
            );

        case 'text':
            return (
                <Box>
                    <FormLabel required={field.required} sx={{ display: 'block', color: 'text.primary' }}>
                        <Typography variant='input'>
                            {field.label}
                        </Typography>
                    </FormLabel>

                    <TextField
                        fullWidth
                        size="small"
                        label={placeholder}
                        name={name}
                        value={value || ''}
                        onChange={(event) => onChange(name, event.target.value)}
                        disabled={disabled}
                        required={required}
                        variant="outlined"

                        sx={{
                            '& .MuiFormLabel-asterisk': {
                                display: 'none',
                            },
                        }}
                    />
                </Box>
            );
    };
};