const express = require('express');
const path = require('path');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT;

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

// Serve Client
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    // app.get('*', (req, res) => res.sendFile(__dirname, '../', 'client', 'build', 'index.html'));

    app.get('*', (_, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });

} else {
    app.get('/', (req, res) => {
        res.json({ message: 'My App' });
    });
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
