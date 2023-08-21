const Workout = require('../models/Workouts'); // import model
const mongoose = require('mongoose'); // import mongoose

//GET all workouts
exports.getWorkouts = async (req, res) => { //res == sends response back to browser, req == has information about the request
try {
    const workouts = await Workout.find({}).sort({createdAt: -1}); // find all workouts
return res.status(200).json({workouts}); //sends back json string
} catch (err) {
    res.status(400).json({err: err.message});
}

}

//GET a single workout
exports.getWorkout = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send(`No workout with id: ${id}`);

try {
    const workout = await Workout.findById(id);
return res.status(200).json({workout});
} catch (err) {
    res.status(404).json({err: `no workout found ${err.message}` });
}
}



//POST a new workout
exports.createWorkout = async (req, res) => {
    const {title, reps, load} = req.body;
try {
    const workout = await Workout.create({title, reps, load});
    res.status(200).json({workout});
    
} catch (err) {
    res.status(400).json({err: err.message});
}}

//DELETE a workout
exports.deleteWorkout = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send(`No workout with id: ${id}`);

try {
    const workout = await Workout.findOneAndDelete({_id: id});
return res.status(200).json({workout});
} catch (err) {
    res.status(404).json({err: `no workout found ${err.message}` });
}
}

//PATCH/Update a workout
exports.updateWorkout = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send(`No workout with id: ${id}`);

try {
    const workout = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body
    });
return res.status(200).json({workout});
} catch (err) {
    res.status(404).json({err: `no workout found ${err.message}` });
}
}

