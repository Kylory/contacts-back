const { User } = require('../../db/userModel')

const logoutUser = (id) => {
  return User.findByIdAndUpdate({ _id: id }, { token: null })
}

module.exports = logoutUser
