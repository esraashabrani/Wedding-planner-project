const router = require('express').Router();
let User = require('../database/schemas');

router.route('/').post((req,res)=> {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const guests = req.body.guests;

    const newUser = new User.User({
        firstName,
        lastName,
        email,
        password,
        guests

    });
    newUser.save()
    .then(() => res.json('user added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/').get((req, res) => {
    User.User.find()
      .then(food => res.json(food))
      .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;