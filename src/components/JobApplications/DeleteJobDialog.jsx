
import { Box, Stack, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function DeleteJobDialog({ isOpen, onClose, job, isLoading }) {

    const handleDelete = async (e) => {
       e.preventDefault()
        console.log("Delete accepted")
        onClose();
    }


    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            maxWidth="md"
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: '15px',
                        padding: '10px',
                    }
                }
            }}>
            <DialogTitle variant='h1'>
                <Stack direction='row' alignItems='center' gap={1}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '46px', height: '46px', backgroundColor: '#FCDDDD', borderRadius: '5px', }}>
                        <DeleteOutlinedIcon sx={{ fontSize: '28px', color: 'alert.main', }} />
                    </Box>
                    Delete Job Application?
                </Stack>
            </DialogTitle>

            <form onSubmit={handleDelete} >
                <DialogContent>
                    <Typography variant='subtitle1'>You are about to delete {job.companyName} - {job.jobTitle}</Typography>
                    <Typography variant='subtitle3'>You will still be able to See this application through the Archive Page</Typography>
                </DialogContent>

                <DialogActions sx={{ justifyContent: 'center' }}>
                    <Stack direction='row' alignItems='center' gap={2} sx={{ width: '365px' }}>
                        <Button
                            onClick={onClose}
                            disabled={isLoading}
                            variant="outlined"

                            sx={{
                                width: 173,
                                height: 42,
                                borderRadius: '8px',
                                borderColor: '#999999',
                                color: 'text.primary',
                                textTransform: 'none',
                            }}
                        >
                            <Typography variant="subtitle1">Cancel</Typography>
                        </Button>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            variant="contained"


                            sx={{
                                width: 173,
                                height: 42,
                                borderRadius: '8px',
                                background: (theme) => theme.palette.alert.main,
                                color: 'white',
                                textTransform: 'none',
                                '&:hover': {
                                    opacity: 0.9
                                }
                            }}
                        >
                            <Typography variant="subtitle1">Delete</Typography>
                        </Button>
                    </Stack>
                </DialogActions>
            </form>
        </Dialog >
    )

};