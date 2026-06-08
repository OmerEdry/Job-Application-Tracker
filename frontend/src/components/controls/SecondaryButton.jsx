import { Button, Typography } from '@mui/material';

export default function SecondaryButton({ onClick, label, disabled, }) {
    return (
        <Button
            fullWidth
            onClick={onClick}
            disabled={disabled}
            variant="outlined"
            size='large'
            sx={{
                textTransform: 'none',
                borderRadius: '8px',
                borderColor: 'buttonBorder.secondary'
            }}
        >
            <Typography variant='subtitle1' color='text.secondaryButton'>
                {label}
            </Typography>
        </Button>

    )
}