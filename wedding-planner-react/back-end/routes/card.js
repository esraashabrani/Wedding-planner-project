const router = require('express').Router();
const Card = require('../database/schemas');

router.route('/').post((req,res) =>{
    const brideName = req.body.brideName;
    const groomName = req.body.groomName;
    const placeName = req.body.placeName;
    const date = Date.parse(req.body.date);
    const wishListUrl = req.body.wishListUrl;
    const groomId = req.body.groomId;

    const newCard = new Card.Card({
        brideName,
        groomName,
        placeName,
        date,
        wishListUrl,
        groomId

    });

    newCard.save()
    .then(() => res.json("Card added!"))
    .catch(err =>res.status(400).json("Error!" + err));
});

router.route('/').get((req, res) => {
    Card.Card.find()
      .then(food => res.json(food))
      .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;