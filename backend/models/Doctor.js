const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  gender: String,
  experience: Number,
  location: String,
  image: String
});

module.exports = mongoose.model('Doctor', doctorSchema);
