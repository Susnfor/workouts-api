const express = require('express');  // import express
const Workout = require('../models/Workouts'); // import model
const router = express.Router(); // initialize express router

//import controllers
const {createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout} = require('../controllers/workoutControllers'); // import controller

//GET all workouts
router.get('/', getWorkouts);

//GET a single workout
router.get('/:id', getWorkout);

//POST a new workout
router.post('/', createWorkout);

//Delete a workout
router.delete('/:id', deleteWorkout);

//Update a workout
router.patch('/:id', updateWorkout);


module.exports = router; // export router