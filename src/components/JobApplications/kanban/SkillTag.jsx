import { Chip } from '@mui/material';

const SkillTag = ({ label }) => {
    return (
        <Chip 
            label={label} 
            size="small"
            sx={{ 
                backgroundColor:'background.paper',
                borderRadius: '8px',
                fontWeight: 400,
                fontSize: '14px',
                color: 'common.black',
            }} 
        />
    );
};

export default SkillTag;