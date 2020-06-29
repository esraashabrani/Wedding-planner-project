const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var db = require('../database/index');
var postData = require('../database/schemas');
const session = require('client-sessions');
const port = 5000;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//client sessions
app.use(
  sessions({
    cookieName: 'session',
    secret: '',
    duration: 30 * 60 * 1000 //30 minutes
  })
);
//post request for signup
app.post('/signup', (req, res) => {
  let user = new postData.User(req.body);
  postData.saveUser();
  res.redirect('/');
});

//post request for signin
app.post('/signin', (req, res) => {
  postData.User.findOne({ email: req.body.email }, (err, user) => {
    if (err || !user || req.body.password !== user.password) {
      return res.render('signup', { error: 'incorrect email/password' });
    }
    req.session.userId = postData.User._id;
    res.redirect('/');
  });
});

app.get('/', (req, res) => {
  //   console.log('hi');
  //   postData.saveSt();
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
