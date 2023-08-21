const mongoose = require('mongoose');

//first arguement == defines structure of document, second arguement == timestamp
const workoutSchema = new mongoose.Schema({ // create schema
    title:{
        type: String,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    load: {
        type: Number,
        required: true,
    }
},{timestamps: true} );



module.exports = mongoose.model('Workout', workoutSchema); // export model