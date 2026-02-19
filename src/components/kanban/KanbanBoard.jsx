import { useState } from 'react';
import { Box, Grow, } from '@mui/material';
import KanbanColumn from './KanbanColumn';






const KanbanBoard = () => {
    /* Should make each headerself contained, should include: name,color */
    const Headers = [
        { name: 'Wishlist', color: '#7950F2' },
        { name: "Applied", color: '#FA5252' },
        { name: 'Interviewing', color: '#FAB005' },
        { name: 'Offer', color: '#22E656' },
    ];

    const colWidth = 100 / Headers.length;


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                gap: '0.5%',
                overflowX: 'auto',
                borderRadius: 2,
                bgcolor: 'white',



            }}>
            {Headers.map(head => (
                <KanbanColumn
                    key={head.name}
                    header={head}
                    colWidthProp={`${colWidth}%`}

                />
            ))}
        </Box>
    )
}

export default KanbanBoard;