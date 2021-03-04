const mongoose = require('mongoose')

module.exports = function setupMongo() {
  mongoose
    .connect('mongodb://localhost/lean-coffee-board', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('*** Connected to DB ***'))
    .catch(() => console.error('Didnt connect)', error))
}
