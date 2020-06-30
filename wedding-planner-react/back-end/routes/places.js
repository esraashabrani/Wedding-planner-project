const router = require("express").Router();
let Places = require("../database/schemas");

router.route("/").get((req, res) => {
  Places.Stuff.find({ category: "venue" })
    .then((places) => res.json(places))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
