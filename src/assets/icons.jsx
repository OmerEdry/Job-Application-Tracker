// src/assets/icons.jsx
import { Icon } from '@iconify/react';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';

// פונקציה שעוזרת לנו לשמור על עקביות ודקות האייקון
const IconWrapper = ({ icon, ...props }) => (
    <Icon 
        icon={icon} 
        width="24" 
        height="24" 
        {...props} 
    />
);

const SolarSettingsIcon = (props) => (
    <Icon 
        icon="solar:settings-linear" 
        width="24" 
        height="24" 
        {...props} 
        style={{ fill: 'none' }} // זה יבטיח שהגלגל לא יהיה אפור אלא שקוף
    />
);

const PhosphorSparkIcon = (props) => (
    <IconWrapper icon="ph:sparkle" {...props} />
);

const ArchiveIcon = (props) => (
    <IconWrapper icon="material-symbols-light:archive-outline" {...props} />
);

export const SidebarIcons = {
    Job: WorkOutlineIcon,
    CV: FileCopyOutlinedIcon,
    Settings: SolarSettingsIcon,
    Spark: PhosphorSparkIcon,
    Archive: ArchiveIcon
};