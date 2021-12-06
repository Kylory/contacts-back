const { getContactById } = require('../../model/contacts/index')
const { NotFound } = require('http-errors')

const getById = async (req, res) => {
  const { _id } = req.user
  const id = req.params.contactId
  const result = await getContactById(id, _id)

  if (!result) {
    throw new NotFound(`Contact with id ${id} not found`)
  }

  res.json(result)
}

module.exports = { getById }
