const express = require('express')
const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/lean-coffee-board', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('*** Connected to DB ***'))
  .catch(() => console.error('Didnt connect)', error))

const app = express()

app.use(express.json()) // add middleware for json data

app.use('/api/users', require('./routes/users'))

app.use('api/cards', require('./routes/cards'))

app.use((err, req, res, next) => {
  console.log(err.message)
  res.json({ error: err.message })
})

app.listen(3000, () => {
  console.log('Server started at PORT:3000')
})
