const { removeContactById } = require('../../model/contacts')
const { NotFound } = require('http-errors')

const removeById = async (req, res) => {
  const { _id } = req.user
  const id = req.params.contactId
  const result = await removeContactById(id, _id)

  if (!result) {
    throw new NotFound(`Contact with id ${id} not found`)
  }

  res.json({ message: 'Contact removed' })
}

module.exports = { removeById }
