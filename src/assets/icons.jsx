// src/assets/icons.jsx
import { Icon } from '@iconify/react';
import { SvgIcon } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';

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
        style={{ fill: 'none' }}
    />
);

const PhosphorSparkIcon = (props) => (
    <IconWrapper icon="ph:sparkle" {...props} />
);

const ArchiveIcon = (props) => (
    <IconWrapper icon="material-symbols-light:archive-outline" {...props} />
);

const WishlistIcon1 = (props) => (
    <Icon
        icon="M6.25 26.25V6.25C6.25 5.5625 6.495 4.97417 6.985 4.485C7.475 3.99583 8.06333 3.75083 8.75 3.75H21.25C21.9375 3.75 22.5263 3.995 23.0163 4.485C23.5063 4.975 23.7508 5.56333 23.75 6.25V26.25L15 22.5L6.25 26.25ZM8.75 22.4375L15 19.75L21.25 22.4375V6.25H8.75V22.4375Z"
        {...props} />

);

const WishlistIcon = (props) => (
    <SvgIcon viewBox="0 0 30 30" sx={{ fontSize: 30 }} {...props}>
        <path d="M6.25 26.25V6.25C6.25 5.5625 6.495 4.97417 6.985 4.485C7.475 3.99583 8.06333 3.75083 8.75 3.75H21.25C21.9375 3.75 22.5263 3.995 23.0163 4.485C23.5063 4.975 23.7508 5.56333 23.75 6.25V26.25L15 22.5L6.25 26.25ZM8.75 22.4375L15 19.75L21.25 22.4375V6.25H8.75V22.4375Z" fill="currentColor" />
    </SvgIcon>
);

const AppliedIcon = (props) => (
    <SvgIcon viewBox="0 0 25 25" sx={{ fontSize: 25 }} {...props}>
        <path d="M14.933 25C15.792 25 16.4002 24.2607 16.8414 23.1151L24.6539 2.69654C24.8687 2.14766 25 1.65835 25 1.25255C25 0.477087 24.511 0 23.7354 0C23.3298 0 22.8408 0.119145 22.2922 0.334012L1.77757 8.19756C0.775048 8.57943 0 9.18788 0 10.0591C0 11.1568 0.835098 11.527 1.98011 11.8732L10.5916 14.4028L13.0964 22.9114C13.4542 24.1166 13.8236 25 14.933 25ZM11.129 12.5896L2.89867 10.0713C2.70783 10.0112 2.64829 9.96334 2.64829 9.87984C2.64829 9.79633 2.69562 9.73727 2.87475 9.66548L19.0001 3.5555C19.9543 3.19756 20.8729 2.71996 21.7553 2.31415C20.9685 2.95876 19.9904 3.72251 19.3345 4.37882L11.129 12.5896ZM15.1244 22.3753C15.0292 22.3753 14.9814 22.2912 14.9218 22.1003L12.4048 13.8666L20.6108 5.65631C21.255 5.01171 22.054 4.00917 22.6866 3.19807C22.281 4.10438 21.8036 5.02342 21.4342 5.99033L15.3274 22.1242C15.2557 22.3035 15.2078 22.3753 15.1244 22.3753Z" fill="currentColor" />
    </SvgIcon>
);

const InterviewingIcon = (props) => (
    <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: 24 }} {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M1.39028 16.4768C1.4058 16.3723 1.38849 16.2655 1.34076 16.1713C1.03816 15.5223 0.766111 14.8595 0.525507 14.1849C0.296932 13.527 0.0429603 12.6578 0.00867413 11.8154C-0.245298 5.38143 5.11224 0.265794 11.5517 0.0100119C17.9912 -0.24577 23.736 4.42702 23.9912 10.861C24.2465 17.295 18.8877 22.4106 12.4482 22.6664C11.2284 22.7161 10.0078 22.5892 8.82404 22.2897L5.3078 23.7379C2.77824 24.7788 0.117882 22.5608 0.67916 19.8783L1.39028 16.4768ZM3.87667 16.9998C4.00431 16.3594 3.92376 15.6948 3.64682 15.1037C3.15158 14.0296 2.58268 12.6222 2.54712 11.7149C2.3541 6.86267 6.43035 2.76126 11.652 2.55256C16.8724 2.34513 21.261 6.1106 21.4528 10.9628C21.6458 15.815 17.5696 19.9164 12.3479 20.1251C11.2508 20.1692 10.1538 20.0346 9.0996 19.7268C8.83146 19.6448 8.54342 19.657 8.28308 19.7612L4.34271 21.3837C4.19691 21.4437 4.03755 21.4628 3.88175 21.4389C3.72595 21.4149 3.5796 21.3489 3.45843 21.2479C3.33726 21.1469 3.24585 21.0147 3.19402 20.8655C3.1422 20.7164 3.13191 20.5559 3.16428 20.4013L3.87667 16.9998Z" fill="currentColor" />
    </SvgIcon>
);

const OfferIcon = (props) => (
    <SvgIcon viewBox="0 0 30 30" sx={{ fontSize: 30 }}{...props}>
        <path d="M8.75 26.25V23.75H13.75V19.875C12.7292 19.6458 11.8179 19.2137 11.0162 18.5787C10.2146 17.9437 9.62583 17.1467 9.25 16.1875C7.6875 16 6.38042 15.3179 5.32875 14.1412C4.27708 12.9646 3.75083 11.5842 3.75 10V8.75C3.75 8.0625 3.995 7.47417 4.485 6.985C4.975 6.49583 5.56333 6.25083 6.25 6.25H8.75V3.75H21.25V6.25H23.75C24.4375 6.25 25.0263 6.495 25.5163 6.985C26.0063 7.475 26.2508 8.06333 26.25 8.75V10C26.25 11.5833 25.7237 12.9637 24.6712 14.1412C23.6187 15.3187 22.3117 16.0008 20.75 16.1875C20.375 17.1458 19.7867 17.9429 18.985 18.5787C18.1833 19.2146 17.2717 19.6467 16.25 19.875V23.75H21.25V26.25H8.75ZM8.75 13.5V8.75H6.25V10C6.25 10.7917 6.47917 11.5054 6.9375 12.1413C7.39583 12.7771 8 13.23 8.75 13.5ZM15 17.5C16.0417 17.5 16.9271 17.1354 17.6562 16.4062C18.3854 15.6771 18.75 14.7917 18.75 13.75V6.25H11.25V13.75C11.25 14.7917 11.6146 15.6771 12.3438 16.4062C13.0729 17.1354 13.9583 17.5 15 17.5ZM21.25 13.5C22 13.2292 22.6042 12.7758 23.0625 12.14C23.5208 11.5042 23.75 10.7908 23.75 10V8.75H21.25V13.5Z" fill="currentColor" />
    </SvgIcon>
);



export const AddIcon = (props) => (
    <SvgIcon viewBox="0 0 14 14" sx={{ fontSize: 14 }} {...props}>
        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="currentColor" />
    </SvgIcon>
);


const BlocksIcon = (props) => (
    <IconWrapper icon="tabler:blocks" {...props} />
);

const ListIcon = (props) => (
    <IconWrapper icon="mdi:format-list-bulleted" {...props} />
);



export const KanbanHeadersIcons = {
    Wishlist: <WishlistIcon />,
    Applied: <AppliedIcon />,
    Interviewing: <InterviewingIcon />,
    Offer: <OfferIcon />,
};



export const SidebarIcons = {
    Job: WorkOutlineIcon,
    CV: FileCopyOutlinedIcon,
    Settings: SolarSettingsIcon,
    Spark: PhosphorSparkIcon,
    Archive: ArchiveIcon
};



export const ToggleViewIcons = {
    ListView: ListIcon,
    KanbanView: BlocksIcon,
};