const mongoose = require('mongoose')
const FindSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  findName: {
    type: String,
    required: true,
  },
  findDescription: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Find = mongoose.model('find', FindSchema)
