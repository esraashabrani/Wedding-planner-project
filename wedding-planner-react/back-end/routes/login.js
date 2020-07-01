// const router = require('express').Router();
// let User = require('../database/schemas');
// const bcrypt = require('bcrypt');

// router.route('/').post(async(req, res) => {
//     var newUser = {};
//     newUser.email = req.body.email;
//     newUser.password = req.body.password;
//     let user = await User.User.findOne({ email: newUser.email });
//     if(!user){
//         return res.status(400).send('That email not exists!');
//     } else {
//         bcrypt.compare(newUser.password, user.password, function(err, result) {
//             if (err){
//                 return res.send(err)
//             }
//             var id = user._id;
//             return res.json(result)
//         });
           
//         }
        
        
    
// });

// module.exports = router;
