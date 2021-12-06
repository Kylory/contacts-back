const { User } = require('../../db/userModel')

const updateUserSubscription = (id, data) => {
  return User.findByIdAndUpdate({ _id: id }, data, { new: true })
}

module.exports = updateUserSubscription
