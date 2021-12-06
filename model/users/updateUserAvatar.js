const { User } = require('../../db/userModel')

const updateUserAvatar = (id, avatarURL) => {
  return User.findByIdAndUpdate({ _id: id }, { avatarURL }, { new: true })
}

module.exports = updateUserAvatar
