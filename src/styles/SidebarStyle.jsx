export const navItemsStyles = (isSelected, theme, isCollapsed) => ({
    mx: isCollapsed ? 1 : 2,
    width: isCollapsed ? '56px' : 'auto',
    borderRadius: '12px',
    mb: 0.5,
    position: 'relative', // חובה עבור הקו הכחול
    display: 'flex',
    justifyContent: isCollapsed ? 'center' : 'flex-start',
    transition: 'all 0.3s ease',

    '&::before': {
        content: isSelected ? '""' : 'none',
        position: 'absolute',
        left: 0,
        top: '30%',
        height: '40%',
        width: '3px',
        background: theme.gradients.primary,
        borderRadius: '0 4px 4px 0',
    },

    // איחוד מצבי בחירה וריחוף
    '&.Mui-selected, &:hover': {
        backgroundColor: isSelected ? 'action.selected' : 'action.hover',
    },
});

export const getNavTextStyle = (isSelected, theme, isCollapsed) => ({
    pl: 1.5,
    display: isCollapsed ? 'none' : 'block',
    '& .MuiTypography-root': {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        ...(isSelected ? theme.components.MuiTypography.variants[0].style({ theme }) : { color: 'text.primary' })
    },
});
export const getIconStyle = (isSelected, theme, isCollapsed) => ({
    minWidth: isCollapsed ? 'auto' : '30px',
    display: 'flex',
    justifyContent: 'center',
    marginRight: isCollapsed ? 0 : '10px',
    '& .MuiSvgIcon-root, & svg': {
        fontSize: '26px',
        transition: 'all 0.3s ease',
        color: isSelected ? 'inherit' : theme.palette.text.primary,
    },
    /** Points to the SVG gradient defined globally in 'src/styles/IconStyle.jsx'
        CSS 'color' property doesn't support gradients on SVGs */
    '& path': {
        fill: isSelected ? 'url(#icon-gradient)' : 'currentColor',
    },
    /**FIX: Stroke-based icons (Solar/Phosphor)
    *  Prevents icons from becoming solid blocks by removing 'fill' 
    *  and applying 'stroke' for a clean, outline look.*/
    '& .iconify--solar': {
        '& path': {
            fill: 'none !important',
            stroke: isSelected ? 'url(#icon-gradient)' : 'currentColor',
            strokeWidth: '1.5px',
        }
    },
});
