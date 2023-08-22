const express = require('express'); // import express
const colors = require('colors'); // import colors
const dotenv = require('dotenv'); // import dotenv
const cors = require('cors'); // import cors
const mongoose = require('mongoose'); // import mongoose
const routes = require('./routes/workouts'); // import/connect to routes

dotenv.config({path: './config.env'}); // initialize dotenv -> point to config file


const app = express(); // initialize express

//middleware
app.use(express.json()); // use express to parse json
app.use(cors()); // use cors

//routes
app.use('/api/workouts', routes); // use routes

mongoose.connect(process.env.MONGO_URI, { // connect to mongoDB
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => (
    app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT} and MongoDB is connected`.yellow.bold)) // run server on port 5000

)).catch(err => console.log(err)); // if error, log error


