const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var db = require("./database/index");
var populateData = require("./database/schemas.js");
var session = require("express-session");
var cookieParser = require("cookie-parser");

const bcrypt = require("bcrypt");

require("dotenv").config();
const app = express();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

const port = process.env.PORT || 5000;
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.post("/login", async (req, res) => {
  var newUser = {};
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  let user = await populateData.User.findOne({ email: newUser.email });
  if (!user) {
    return res.send("That email not exists!");
  } else {
    bcrypt.compare(newUser.password, user.password, function (err, result) {
      if (err) {
        return res.send(err);
      } else if (result === true) {
        // var id = user._id;
        // req.session.loggedin = true;
        // req.session.id = id;
        // var userInfo ={
        //    id : id,
        //    sessionLoggedin:req.session.loggedin,
        //    sessionId:req.session.id,
        //    userEmail :user.email
        // }

        // return res.redirect('/homepage')
        req.session.user = user;

        res.status(200).send(result);
      } else {
        return res.send(result);
      }
    });
  }
});

app.get("/", (req, res) => {});

populateData.saveSt();

module.exports = app;

const placesRouter = require("./routes/places");
const signUpRouter = require("./routes/signUp");
const dressesRouter = require("./routes/dresses");
const foodRouter = require("./routes/food");
const cardRouter = require("./routes/card");
const { request } = require("express");
//const loginRouter = require("./routes/login");

app.use("/places", placesRouter);
app.use("/dresses", dressesRouter);
app.use("/food", foodRouter);
app.use("/signup", signUpRouter);
//app.use("/login",loginRouter);
app.use("/cardInvitation", cardRouter);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
