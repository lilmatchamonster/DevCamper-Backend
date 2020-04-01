const express = require('express');
const dotenv = require('dotenv');

// Router files
const bootcamps = require('./routes/bootcamps');

//Loade env files
dotenv.config({path: './config/config.env'});

const app = express();

// Mount routers

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`));