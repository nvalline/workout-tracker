// require dependencies
const express = require("express");
const mongoose = require("mongoose");

// declare PORT
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set static public folder for client side
app.use(express.static("public"));

// create mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// require routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, () => {
    console.log(`App running on: ${PORT}`)
});