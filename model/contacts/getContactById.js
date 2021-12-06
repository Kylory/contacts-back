const { Contact } = require('../../db/contactModel')

const getContactById = async (id, _id) => {
  return await Contact.findOne({ _id: id, owner: _id }).populate(
    'owner',
    'email'
  )
}

module.exports = getContactById
