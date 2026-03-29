import { Box } from '@mui/material';
import OfferEmptyPic from '../../../assets/Pictures/OfferEmptyPic.png';

const OfferEmptyState = () => {
    return (
        <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'flex-start',
            pt: '20px',
            width: '100%'
        }}>
            <Box 
                component="img"
                src={OfferEmptyPic} 
                alt="You Are On The Right Track! Keep Going!"
                sx={{ 
                    width: '304px',
                    height: 'auto', 
                    display: 'block'
                }}
            />
        </Box>
    );
};

export default OfferEmptyState;