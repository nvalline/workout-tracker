const db = require("../models");
const { Workout } = require("../models");

module.exports = function (app) {
    // query all workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(function (dbWorkouts) {
            res.json(dbWorkouts);
        })
    });

    // create new workout on exercise.html load
    app.post("/api/workouts", (req, res) => {
        const workout = new Workout(req.body);

        db.Workout.create(workout)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => console.log(err));
    });

    // add exercise(s) to workout
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
            .then(dbData => {
                const totalDuration = Workout.sumDuration(dbData);

                // set totalDuration of exercises for workout
                db.Workout.findOneAndUpdate({ _id: req.params.id }, { $set: { totalDuration: totalDuration } }, { new: true })
                    .then(dbData => {
                        res.json(dbData);
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err));
    });

    // query all workouts for stats
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(function (dbWorkouts) {
            res.json(dbWorkouts);
        })
    });
};

