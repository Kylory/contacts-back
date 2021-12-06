const { Contact } = require('../../db/contactModel')

const updateContactById = (id, _id, data) => {
  return Contact.findByIdAndUpdate({ _id: id, owner: _id }, data, {
    new: true,
  })
}

module.exports = updateContactById
