const { Contact } = require('../../db/contactModel')

const addContact = async ({ name, email, phone, favorite }, _id) => {
  return await Contact.create({ name, email, phone, favorite, owner: _id })
}

module.exports = addContact
