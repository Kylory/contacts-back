const addUser = require('./addUser')
const loginUser = require('./loginUser')
const logoutUser = require('./logoutUser')
const getUserByToken = require('./getUserByToken')
const updateUserSubscription = require('./updateUserSubscription')
const updateUserAvatar = require('./updateUserAvatar')

module.exports = {
  addUser,
  loginUser,
  logoutUser,
  getUserByToken,
  updateUserSubscription,
  updateUserAvatar,
}
