import { Card } from '@mui/material';

const BaseKanbanCard = ({ children, sxOverrides }) => {

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
                ...(Array.isArray(sxOverrides) ? sxOverrides : [sxOverrides])
            ]}
        >
            {children}
        </Card>
    );
};

export default BaseKanbanCard;