const express = require('express');
const app = express();
var db = require('../database/index');
var postData = require('../database/schemas');

app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 5000;

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
    res.redirect('/');
  });
});

app.get('/', (req, res) => {
  //   console.log('hi');
  //   postData.saveSt();
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
