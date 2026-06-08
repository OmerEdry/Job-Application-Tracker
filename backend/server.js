const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); 

app.get('/api/health', (req, res) => {
    res.json({ status: 'UP', message: 'Backend server is running smoothly' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});