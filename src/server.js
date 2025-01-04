const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/db');

// Load environment variables
dotenv.config();

// Import app configurations
const app = require('./app');

// Sync the database models with MySQL
sequelize.sync({ alter: true }) // Use `alter: true` for development (updates models without losing data)
    .then(() => console.log('Database synchronized.'))
    .catch((error) => console.error('Error synchronizing database:', error.message));

    sequelize.sync({ alter: true }) // Use `alter: true` for development
    .then(() => console.log('Database synchronized.'))
    .catch((error) => console.error('Error synchronizing database:', error.message));


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
