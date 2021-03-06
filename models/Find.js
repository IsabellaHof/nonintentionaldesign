const mongoose = require('mongoose')
const FindSchema = new mongoose.Schema({
  image: {
    type: String,
    // required: true,
  },
  findName: {
    type: String,
    // required: true,
  },
  findDescription: {
    type: String,
    // required: true,
  },
  findPerson: {
    type: String,
    // required: true,
  },
  findCountry: {
    type: String,
    // required: true,
  },
  findCity: {
    type: String,
    // required: true,
  },
  findMaterial: {
    type: Array,
    // required: true,
  },

  findMail: {
    type: String,
    required: false,
  },
  // comments: {
  //   type: Array,
  //   required: false,
  // },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Find', FindSchema)
