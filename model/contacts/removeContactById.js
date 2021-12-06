const { Contact } = require('../../db/contactModel')

const removeContactById = async (id, _id) => {
  return await Contact.findByIdAndRemove({ _id: id, owner: _id })
}

module.exports = removeContactById
