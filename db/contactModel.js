const { Schema, model } = require('mongoose')

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },

  number: {
    type: String,
    required: [true, 'Set number for contact'],
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

const Contact = model('Contact', contactSchema)

module.exports = { Contact }
