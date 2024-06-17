const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(err => console.error('Connection error', err));

// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Could not connect to MongoDB', err));

// // Routes
// app.use('/users', userController);

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });