const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            duration: Number,
            distance: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ],
    totalDuration: Number,
    totalWeight: Number,
    totalSets: Number,
    totalReps: Number,
    totalDistance: Number
});

workoutSchema.methods.sumDuration = function () {
    this.totalDuration = this.exercises.duration.forEach(exercise => {
        let sum = 0;
        sum += exercise;
    })

    return this.totalDuration;
}

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;