// connecting mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/weddingPlanning', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('We are connected');
});

module.exports = db;
