const { User } = require('../../db/userModel')

const getUserByToken = (token) => {
  return User.findOne({ token })
}

module.exports = getUserByToken
