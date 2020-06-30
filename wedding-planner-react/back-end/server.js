const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var db = require("./database/index");
var populateData = require("./database/schemas.js");

require("dotenv").config();
const app = express();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

const port = process.env.PORT || 5000;

app.post("/", (req, res) => {});

app.get("/", (req, res) => {});

populateData.saveSt();

const placesRouter = require("./routes/places");
const signUpRouter = require("./routes/signUp");
const dressesRouter = require("./routes/dresses");
const foodRouter = require("./routes/food");
const cardRouter = require("./routes/card");

app.use("/places", placesRouter);
app.use("/dresses", dressesRouter);
app.use("/food", foodRouter);
app.use("/signup", signUpRouter);
app.use("/cardInvitation", cardRouter);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
