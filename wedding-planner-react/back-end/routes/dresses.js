const router = require("express").Router();
let Dresses = require("../database/schemas");

//Function to retrive wedding stuff data from db, making filter in find to return specific category
router.route("/").get((req, res) => {
  Dresses.Stuff.find({ category: "dresses" }).limit(11)
    .then((dresses) => res.json(dresses))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
