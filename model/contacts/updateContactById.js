const { Contact } = require('../../db/contactModel')

const updateContactById = (id, data) => {
  return Contact.findByIdAndUpdate({ _id: id }, data, {
    new: true,
  })
}

module.exports = updateContactById
