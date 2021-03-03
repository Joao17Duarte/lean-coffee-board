const express = require('express')
const { v4 } = require('uuid')
const mongoose = require('mongoose')
const User = require('./models/User')

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

app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params
  res.json(await User.findOne({ id }))
})

app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params
  res.json(await User.deleteOne({ id }))
})

app.post('/api/users', async (req, res) => {
  res.json(await User.create(req.body))
})

app.get('/api/cards', (req, res) => {
  res.json([{ title: 'First card' }])
})
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000')
})
