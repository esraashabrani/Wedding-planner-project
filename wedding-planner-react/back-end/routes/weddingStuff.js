const router = require('express').Router();
var models = require('../database/schemas.js');
 //return all wedding stuff from the db
router.route('/').get((req, res) => {
    models.Stuff.find()
      .then(stuffs => res.json(stuffs))
      .catch(err => res.status(400).json('Error: ' + err));
  });