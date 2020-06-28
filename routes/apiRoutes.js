const db = require("../models");
const { Workout } = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        console.log("API Workout Route Hit")
        db.Workout.find({}).then(function (dbWorkouts) {
            res.json(dbWorkouts);
        })
    });

    app.post("/api/workouts", (req, res) => {
        console.log("REQ.BODY:", req.body)
        res.json({ message: "hi post" });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log("REQ.PARAMS:", req.params.id)
        console.log(req.body)

        const workout = new Workout(req.body);
        workout.sumDuration();

        db.Workout.create(workout)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                console.log(err)
            })
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(function (dbWorkouts) {
            res.json(dbWorkouts);
        })
    });
};

