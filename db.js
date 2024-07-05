const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'; // Replace 'mydatabase' with your database name

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected to mongoDB server');
});
db.on('error', (err) => {
    console.log('mongoDB connection error:', err);
});
db.on('disconnected', () => {
    console.log('disconnected from mongoDB server');
});

// Export the database connection
module.exports = db;
