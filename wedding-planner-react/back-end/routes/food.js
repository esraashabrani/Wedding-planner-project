const router = require('express').Router();
let Food = require('../database/schemas');


router.route('/').get((req, res) => {
    Food.Stuff.find({ category: "catering" })
      .then(food => res.json(food))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;