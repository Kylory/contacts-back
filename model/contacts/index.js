const getAllContacts = require('./getAllContacts')
const getContactById = require('./getContactById')
const addContact = require('./addContact')
const removeContactById = require('./removeContactById')
const updateContactById = require('./updateContactById')
const updateContactStatusById = require('./updateContactStatusById')

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  removeContactById,
  updateContactById,
  updateContactStatusById,
}
