const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var db = require("./database/index");
var populateData = require("./database/schemas.js");
var session = require("express-session");
const FileStore = require("session-file-store")(session);
var cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

require("dotenv").config();
const app = express();
app.use(cookieParser("weddingPlannerApplication"));

app.use(express.json());
app.use(cors());
app.use(
  session({
    name: "session-id",
    secret: "ASEAFigthers",
    saveUninitialized: false,
    resave: false,
    store: new FileStore(),
  })
);
const port = process.env.PORT || 5000;
app.use(express.static("public"));
app.post("/login", async (req, res, next) => {
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
        req.session.user = user;

        res.cookie("user", "user", {
          signed: true,
          maxAge: 1000 * 60 * 60,
        });
        var userInfo = {
          user: user,
          result: result,
        };
        res.status(200).send(userInfo);
        next();
      } else {
        return res.send(result);
      }
    });
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  return res.status(200).send("logout");
});

app.get("/",(req, res) =>{
  res.send(true);
})
populateData.saveSt();

module.exports = app;

const placesRouter = require("./routes/places");
const signUpRouter = require("./routes/signUp");
const dressesRouter = require("./routes/dresses");
const foodRouter = require("./routes/food");
const cardRouter = require("./routes/card");

//const loginRouter = require("./routes/login");

app.use("/places", placesRouter);
app.use("/dresses", dressesRouter);
app.use("/food", foodRouter);
app.use("/signup", signUpRouter);
//app.use("/login",loginRouter);
app.use("/cardInvitation", cardRouter);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
