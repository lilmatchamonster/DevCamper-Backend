const express = require('express');
const dotenv = require('dotenv');
// const logger = require('./middleware/logger');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

// Loade env files
dotenv.config({path: './config/config.env'});

// Connect to database
connectDB();

// Router files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Dev Logging middleware
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 9000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Errpr: ${err.message}`.red)

  // Close server & exit process
  server.close(() => process.exit(1));
})