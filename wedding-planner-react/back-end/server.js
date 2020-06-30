const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sessions = require('client-sessions');
const bcrypt = require('bcrypt');
var db = require('../database/index');
var postData = require('../database/schemas');
const port = 5000;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//client sessions
app.use(
  sessions({
    cookieName: 'session',
    secret: 'weddingplanningapp',
    duration: 30 * 60 * 1000, //30 minutes
    activeDuration: 5 * 6 * 1000,
    httpOnly: true, //dont let js code access cookies
    secure: true, //only set cookies over https
    emphemeral: true //destroy cookies hen the broser closes
  })
);

//smart user middleware
app.use((req, res, next) => {
  req.session.userId = postData.User._id;
  if (!(req.session && req.session.useID)) {
    return next();
  }
  postData.User.findById(req.session.userId, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next();
    }

    user.password = undefined;

    req.user = user;
    res.locals.user = user;

    next();
  });
});

//post request for signup
app.post('/sign-up', (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, 14);
  req.body.password = hash;
  let user = new postData.User(req.body);
  postData.saveUser(user);
  res.redirect('/homePage');
});

app.get('/sign-up', (req, res) => {
  res.render('sign-up');
});

//post request for signin
app.post('/sign-in', (req, res) => {
  postData.User.findOne({ email: req.body.email }, (err, user) => {
    if (
      err ||
      !user ||
      !bcrypt.compareSync(req.body.password !== user.password)
    ) {
      return res.render('signup', { error: 'incorrect email/password' });
    }
    req.session.userId = postData.User._id;
    res.redirect('/homePage');
  });
});

app.get('/sign-in', (req, res) => {
  res.render('sign-in');
});

//get for singin to see if user is signed in
app.get('/homePage', (req, res, next) => {
  req.session.userId = postData.User._id;
  if (!(req.session && req.session.userId)) {
    return res.redirect("/sign-in")
  }
  postData.User.findById(req.session.userId, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/sign-in");
    }
    res.render("/homePage");
  })
});


app.get('/', (req, res) => {
  //   console.log('hi');
  //   postData.saveSt();
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

module.exports = app;
