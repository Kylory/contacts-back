const { addContact } = require('../../model/contacts/index')
const { BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  name: Joi.string().required(),
  number: Joi.string().required(),
})

const add = async (req, res) => {
  const { error } = joiSchema.validate(req.body)

  if (error) {
    throw new BadRequest('missing required field')
  }

  const { _id } = req.user
  const newContact = await addContact(req.body, _id)

  res.status(201).json({ message: 'Added new contact', newContact: newContact })
}

module.exports = {
  add,
}
