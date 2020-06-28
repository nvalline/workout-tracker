const db = require("../models");

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
        console.log("REQ.BODY:", req.body)
        res.json({ message: "hi put" });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(function (dbWorkouts) {
            res.json(dbWorkouts);
        })
    });
};

