const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const finds = require('./routes/api/finds.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/finds', finds)

mongoose
  .connect(
    'mongodb://ihof:nid1983@ds161700.mlab.com:61700/nonintentionaldesign',
    { useNewUrlParser: true }
  )
  .then(() => console.log('connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello Server')
})

app.listen(3000, () => {
  console.log('server works')
})
