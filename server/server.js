const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'My App' })
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));