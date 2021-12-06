const { updateContactStatusById } = require('../../model/contacts')
const { NotFound, BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  favorite: Joi.boolean().required(),
})

const updateStatusById = async (req, res) => {
  const { _id } = req.user
  const id = req.params.contactId
  const data = req.body
  const { error } = joiSchema.validate(req.body)

  if (error) {
    throw new BadRequest('missing field favorite')
  }

  const updatedContact = await updateContactStatusById(id, _id, data)

  if (!updatedContact) {
    throw new NotFound(`Contact with id ${id} not found`)
  }

  res.json({ message: 'Contact updated', updatedContact: updatedContact })
}

module.exports = { updateStatusById }
