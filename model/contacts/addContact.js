const { Contact } = require('../../db/contactModel')

const addContact = async ({ name, number }, _id) => {
  return await Contact.create({ name, number, owner: _id })
}

module.exports = addContact
