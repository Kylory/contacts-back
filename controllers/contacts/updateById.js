const { updateContactById } = require('../../model/contacts/index')
const { NotFound, BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  name: Joi.string(),
  number: Joi.string(),
})

const updateById = async (req, res) => {
  const id = req.params.contactId
  const data = req.body

  const { error } = joiSchema.validate(req.body)

  if (error) {
    throw new BadRequest('missing fields')
  }

  // Якщо в тілі запиту порожній об'єкт
  if (!Object.keys(data).length) {
    throw new BadRequest('missing fields')
  }

  const updatedContact = await updateContactById(id, data)

  // Якщо котакт не знайдено в БД
  if (!updatedContact) {
    throw new NotFound(`Contact with id ${id} not found`)
  }

  res.json({ message: 'Contact updated', updatedContact: updatedContact })
}

module.exports = { updateById }
