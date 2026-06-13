const express = require('express');
const cors = require('cors');
const applicationRoutes = require('./routes/applicationRoutes');
const app = express();
const PORT = 5000;


const allowedOrigins = [
    'http://localhost:5173', //defult Vite port
    'http://localhost:3000'  //backup port
];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'CORS Policy: Access denied for this origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));
app.use(express.json());

//MOUNT ROUTES
app.use('/api/applications', applicationRoutes);

// Basic Test Route
app.get('/api/health', (req, res) => {
    res.json({ status: 'UP', message: 'Backend server is running smoothly' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});