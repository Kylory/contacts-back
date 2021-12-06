const { logoutUser } = require('../../model/users')

const logout = async (req, res) => {
  const { _id } = req.user
  await logoutUser(_id)
  res.status(204).send()
}

module.exports = { logout }
