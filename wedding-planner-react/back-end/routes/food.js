const router = require('express').Router();
let Food = require('../database/schemas');

//Function to retrive wedding stuff data from db, making filter in find to return specific category
router.route('/').get((req, res) => {
    Food.Stuff.find({ category: "catering" }).limit(10)
      .then(food => res.json(food))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;