const router = require('express').Router();
let User = require('../database/schemas');
const bcrypt = require('bcrypt');

router.route('/').post(async(req,res)=> {
 
    let hash = bcrypt.hashSync(req.body.password, 14);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = hash;
    const guests = req.body.guests;

    let user = await User.User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That email already exists!');
    }else{
        const newUser = new User.User({
            firstName,
            lastName,
            email,
            password,
            guests
    
        });
        await newUser.save();
        res.send('user added!');
    }
 
    // newUser.save()
    // .then(() => res.json('user added!'))
    // .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/').get((req, res) => {
    User.User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
});



      

module.exports = router;