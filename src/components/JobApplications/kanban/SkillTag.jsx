import { Chip } from '@mui/material';

const SkillTag = ({ label }) => {
    return (
        <Chip 
            label={label} 
            size="small"
            sx={{ 
                backgroundColor:'background.paper',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '12px',
                color: 'common.black',
            }} 
        />
    );
};

export default SkillTag;