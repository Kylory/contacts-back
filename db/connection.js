const mongoose = require('mongoose')
mongoose.Promise = global.Promise
require('dotenv').config()

const connectMongo = async () => {
  return mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = {
  connectMongo,
}
