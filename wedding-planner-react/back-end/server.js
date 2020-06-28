const express = require('express');
const app = express();
var db = require('../database/index');

app.use(express.static('public'));
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 5000;

app.post('/', (req, res) => { });

app.get('/', (req, res) => {
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));