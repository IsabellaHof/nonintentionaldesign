const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()
const finds = require('./routes/api/finds.js')
const cloudinary = require('cloudinary')
const cors = require('cors')
const formData = require('express-form-data')

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
})

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
  })
)

app.use(formData.parse())

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/finds', finds)

mongoose
  .connect(
    process.env.MONGO_DB,
    { useNewUrlParser: true }
  )
  .then(() => console.log('connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello Server')
})

app.listen(5000, () => {
  console.log('server works')
})
