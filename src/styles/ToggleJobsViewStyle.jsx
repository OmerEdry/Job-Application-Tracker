
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
        gap: 1,
        margin: '0px !important',
        padding: '9px 6px',
        border: '1px solid transparent !important',
        borderRadius: '5px !important',
        textTransform: 'none',
        transition: 'all 0.2s ease',
        whiteSpace: 'nowrap',
        '&:focus:not(:focus-visible)': { outline: 'none' },

        "& .MuiTypography-root": {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            letterSpacing: 0,
        },

        "&.Mui-selected": {
            backgroundColor: 'background.paper',
            '&:focus:not(:focus-visible)': { outline: 'none' },

            "& .MuiTypography-root": {
                fontWeight: 700,
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
                strokeWidth: '2px',
            }
        },

        "& .MuiTouchRipple-child": {
            backgroundColor: 'primary.main',
        },
        "&:active": {
            transform: 'scale(0.96)',
            transition: 'transform 0.1s ease',
        },
    }
}