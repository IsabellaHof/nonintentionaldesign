const express = require('express')
const router = express.Router()
const Find = require('../../models/Find.js')
const cloudinary = require('cloudinary')

router.post('/image-upload', (req, res) => {
  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))

  Promise.all(promises).then(results => res.json(results))
})

router.post('/', (req, res) => {
  const newFind = {
    image: req.body.image,
    findName: req.body.findName,
    findDescription: req.body.findDescription,
    findPerson: req.body.findPerson,
    findCountry: req.body.findCountry,
    findCity: req.body.findCity,
    findMaterial: req.body.findMaterial,
    comments: req.body.comments,
  }
  Find.create(newFind)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

router.get('/getAll', (req, res) => {
  Find.find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
  Find.find({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

router.delete('/:id', (req, res) => {
  Find.findByIdAndRemove(req.params.id)
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

router.patch('/:id', (req, res) => {
  Find.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

module.exports = router
