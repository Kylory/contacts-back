const { User } = require('../../db/userModel')
const bcrypt = require('bcrypt')
const gravatar = require('gravatar')
const { nanoid } = require('nanoid')

const addUser = async ({ name, email, password }) => {
  const user = await User.findOne({ email })
  const verifyToken = nanoid()

  // Якщо юзер уже є в БД, то повертаємо null, який обробить інша функція
  if (user) {
    return null
  }

  return await User.create({
    name,
    email,
    password: await bcrypt.hash(password, 10),
    avatarURL: gravatar.url(email),
    verifyToken,
  })
}

module.exports = addUser
