const router = require("express").Router();
let Dresses = require("../database/schemas");

router.route("/").get((req, res) => {
  Dresses.Stuff.find({ category: "dresses" })
    .then((dresses) => res.json(dresses))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
