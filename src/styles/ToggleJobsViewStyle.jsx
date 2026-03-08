
export const ToggleGroupStyles = {
    gap: 1,
    width: 'fit-content',
    maxWidth: '100%',
    padding: '5px',
    borderRadius: '6px',
    backgroundColor: 'background2.default',
    overflowX: 'auto',
    '&::-webkit-scrollbar': { display: 'none' },
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',


    "& .MuiToggleButtonGroup-grouped": {
        border: '1px solid transparent !important',
        margin: '0px !important',
        borderRadius: '5px !important',
        padding: '6px 16px',
        gap: 1,
        textTransform: 'none',
        transition: 'all 0.2s ease',
        whiteSpace: 'nowrap',


        "&.Mui-selected": {
            backgroundColor: 'background.paper',
            '&:focus:not(:focus-visible)': { outline: 'none' },

            "& .MuiTypography-root": {
                backgroundImage: (theme) => theme.palette.primary.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            },
            "&.icon-gradient-fill svg path, &.icon-gradient-fill svg rect": {
                fill: 'url(#icon-gradient)',
                stroke: 'none',
            },
            "&.icon-gradient-stroke svg path, &.icon-gradient-stroke svg rect": {
                fill: 'none',
                stroke: 'url(#icon-gradient)',
                strokeWidth: '1.2px',
            }
        }
    }
}