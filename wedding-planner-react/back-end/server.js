const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var db = require('../database/index');
var postData = require('../database/schemas');
const session = require('./middleware/session');
const bcrypt = require('bcrypt');
const port = 5000;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//post request for signup
app.post('/sign-up', (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, 14);
  req.body.password = hash;
  let user = new postData.User(req.body);
  postData.saveUser();
  res.redirect('/homePage');
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

app.get('/', (req, res) => {
  //   console.log('hi');
  //   postData.saveSt();
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

module.exports = app;
