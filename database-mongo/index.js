const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const locationSchema = new Schema({
  User: String,
  deviceName: String,
  locations: { type: Array, default: [] },
});

const location = mongoose.model('location', locationSchema);


module.exports.location = location;
