const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
    unique: true
  },
  age: {
    required: true,
    type: Number
  }
});

module.exports = mongoose.model('Users', dataSchema);