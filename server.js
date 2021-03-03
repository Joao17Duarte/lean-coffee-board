const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/User')
const Card = require('./models/Card')

mongoose
  .connect('mongodb://localhost/lean-coffee-board', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('*** Connected to DB ***'))
  .catch(() => console.error('Didnt connect)', error))

const app = express()

app.use(express.json()) // add middleware for json data

app.get('/api/users', async (req, res) => {
  res.json(await User.find())
})

app.post('/api/users', async (req, res) => {
  res.json(await User.create(req.body))
})

app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params
  res.json(await User.findOne({ id }))
})

app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params
  res.json(await User.deleteOne({ id }))
})

/**
 *
 *
 */

app.get('/api/cards', async (req, res) => {
  res.json(await Card.find())
})

app.post('/api/cards', async (req, res) => {
  res.json(await Card.create(req.body))
})

app.get('/api/cards/:id', async (req, res) => {
  const { id } = req.params
  res.json(await Card.findOne({ id }))
})

app.patch('/api/cards/:id', async (req, res) => {
  const { id } = req.params
  res.json(await Card.updateOne({ id }))
})

app.delete('/api/cards', async (req, res) => {
  const { id } = req.params
  res.json(await Card.deleteOne({ id }))
})

app.listen(3000, () => {
  console.log('Server started at PORT:3000')
})
