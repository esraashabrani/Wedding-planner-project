const router = require("express").Router();
let Places = require("../database/schemas");

//Function to retrive wedding stuff data from db, making filter in find to return specific category
router.route("/").get((req, res) => {
  Places.Stuff.find({ category: "venue" }).limit(10)
    .then((places) => res.json(places))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
