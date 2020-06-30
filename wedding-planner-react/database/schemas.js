const mongoose = require('mongoose');
const sessionId = require("../back-end/server");
const stuff = require('./stuffData.json');

//creatinf a user schema
let userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  guests: [String]
});

//creating wedding stuff schema
let stuffSchema = mongoose.Schema({
  category: String,
  name: String,
  imageUrl: String,
  websiteUrl: String,
  contact: Number,
  location: String
});

//creating card schema
let cardSchema = mongoose.Schema({
  brideName: String,
  groomName: String,
  placeName: String,
  date: Date,
  groomId: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
  ]
});

//creating models for the schemas
let User = mongoose.model('User', userSchema, 'users');
let Stuff = mongoose.model('Stuff', stuffSchema, 'allstuff');
let Card = mongoose.model('Card', cardSchema, 'cards');

//save users
let saveUser = (user) => {
  user.save = err => {
    if (err) {
      let error = 'please try again';
    }
    //MongoDB error code 11000 happen due to duplicate entries or bad syntax
    if (error.code === 11000) {
      let error = 'the email is already taken , please try another one';
    }
  };
};

let saveCrd = cards => {
  // var card = new Card();
  // card.groomName = User.name;
  //card.groomId.push(sessionId.sessionId);
  // card.save();
};

let saveSt = () => {
  // for (var i = 0; i < stuff.length; i++) {
  //   var partOfStuff = new Stuff({
  //     category: stuff[i].category,
  //     name: stuff[i].name,
  //     imageUrl: stuff[i].imageUrl,
  //     websiteUrl: stuff[i].websiteUrl,
  //     contact: stuff[i].contact,
  //     location: stuff[i].location
  //   });
  //   partOfStuff.save();
  // }
};

module.exports.saveUser = saveUser;
module.exports.saveSt = saveSt;
module.exports.saveCrd = saveCrd;
module.exports.User = User;
module.exports.Stuff = Stuff;
module.exports.Card = Card;
