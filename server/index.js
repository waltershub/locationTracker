const express = require('express');
const bodyParser = require('body-parser');
const router = require('./controllers/routers');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
mongoose.connect('mongodb://dbandmin:drum12@ds155191.mlab.com:55191/locations', {
  useMongoClient: true });
app.use(express.static(`${__dirname}/../react-client/dist`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);
app.listen(port, () => {
  console.log('listening on port 3000!');
});
