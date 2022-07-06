// create express app
const express = require("express");
const app = express();

// Mongodb connection
const connectDB = require("./config/db");
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes.js"));

module.exports = app;
