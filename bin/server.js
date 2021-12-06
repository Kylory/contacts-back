const app = require('../app')
const { connectMongo } = require('../db/connection')
require('dotenv').config()

const PORT = process.env.PORT || 4000

const start = async () => {
  try {
    await connectMongo()

    app.listen(PORT, (error) => {
      if (error) console.error('Error at server launch:', error)
      console.log(
        `Database connection successful\nServer running. Use our API on port ${PORT}`
      )
    })
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

start()
