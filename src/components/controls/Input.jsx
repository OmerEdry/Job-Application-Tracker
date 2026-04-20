import { Box, FormLabel, Typography, Autocomplete, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function InputField({ field, value, onChange }) {
    const { name, label, placeholder, type, required, options, multiple, freeSolo, limitTags } = field;
    const currentValue = value !== undefined && value !== null ? value : (field.multiple ? [] : '');

    if (type === 'autocomplete') {
        return (
            <Box>
                <FormLabel required={required} sx={{ display: 'block', color: 'text.primary' }}>
                    <Typography variant='input'>{label}</Typography>
                </FormLabel>
                <Autocomplete
                    multiple={multiple}
                    freeSolo={freeSolo}
                    options={options || []}
                    limitTags={limitTags}
                    value={currentValue}
                    onChange={(event, newValue) => onChange(name, newValue)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={placeholder}
                            required={required && (!currentValue || currentValue.length === 0)}
                            variant='outlined'
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
    }

    if (type === 'date') {
        return (
            <Box>
                <FormLabel required={required} sx={{ display: 'block', color: 'text.primary' }}>
                    <Typography variant='input'>{label}</Typography>
                </FormLabel>
                <DatePicker
                    views={['year', 'month', 'day']}
                    value={currentValue ? dayjs(currentValue) : null}
                    onChange={(newValue) => onChange(name, newValue || null)}
                    slotProps={{
                        textField: {
                            fullWidth: true,
                            size: 'small',
                            required: required,
                        }
                    }}
                />
            </Box>
        );
    }

    return (
        <Box>
            <FormLabel required={required} sx={{ display: 'block', color: 'text.primary' }}>
                <Typography variant='input'>{label}</Typography>
            </FormLabel>
            <TextField
                type={type}
                value={currentValue}
                onChange={(event) => onChange(name, event.target.value)}
                required={required}
                variant='outlined'
                size='small'
                fullWidth
            />
        </Box>
    );
}