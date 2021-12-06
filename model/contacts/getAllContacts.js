const { Contact } = require('../../db/contactModel')

const getAllContacts = async (owner, page = 1, limit = 20, favorite) => {
  const options = {
    page,
    limit,
  }

  // Якщо favorite не передано, то робимо запит без нього
  if (!favorite) {
    return await Contact.paginate(
      Contact.find({ owner }).populate('owner', 'email'),
      options
    )
  }

  // Якщо favorite передано
  return await Contact.paginate(
    Contact.find({ owner, favorite }).populate('owner', 'email'),
    options
  )
}

module.exports = getAllContacts
