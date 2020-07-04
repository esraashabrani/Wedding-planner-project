const router = require('express').Router();
const Card = require('../database/schemas');

//Insert invitation card data to database
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


//Function to retrive card data from db and handle can't /GET error when refresh the page
router.route('/').get((req, res) => {
    Card.Card.find()
      .then(card => res.json(card))
      .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;