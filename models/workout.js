const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Workout Model
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String
        },
        name: String,
        duration: Number,
        distance: Number,
        weight: Number,
        reps: Number,
        sets: Number
    }],
    totalDuration: Number
});

// Workout static to calculate total duration of exercises
workoutSchema.statics.sumDuration = function (data) {
    let totalDuration = 0;
    const exercises = data.exercises;

    for (const exercise of exercises) {
        totalDuration += exercise.duration;
    }

    return totalDuration;
}

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;