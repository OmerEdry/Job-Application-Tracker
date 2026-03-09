import { Card } from '@mui/material';

const BaseKanbanCard = ({ children, sx = [] }) => {

    return (
        <Card
            elevation={0}
            sx={[
                {
                    width: 338,
                    height: 196,
                    padding: 0,
                    border: '1px solid',
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                    flexShrink: 0,
                },
                ...(Array.isArray(sx) ? sx : [sx])
            ]}
        >
            {children}
        </Card>
    );
};

export default BaseKanbanCard;