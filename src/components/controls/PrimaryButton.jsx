import { Button, Typography } from '@mui/material';

export default function PrimaryButton({ label, isLoading, }) {
    return (
        <Button
            fullWidth
            type="submit"
            disableElevation
            disabled={isLoading}
            variant="contained"
            size='large'
            sx={{
                background: (theme) => theme.gradients?.primary,
                borderRadius: '8px',
                color: '#FFFFFF',
                '&:hover': {
                    opacity: 0.9
                }
            }}
        >
            <Typography variant='subtitle1' color='white'>
                {label}
            </Typography>
        </Button>

    )
}
