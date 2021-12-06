const { User } = require('../../db/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const addUser = async ({ name, email, password }) => {
  const user = await User.findOne({ email })

  // Якщо юзер уже є в БД, то повертаємо null, який обробить інша функція
  if (user) {
    return null
  }

  //Create new user
  const newUser = await User.create({
    name,
    email,
    password: await bcrypt.hash(password, 10),
  })

  // Generate new token
  const token = jwt.sign(
    {
      _id: newUser._id,
    },
    process.env.JWT_SECRET
  )

  // Update user token in DB
  await User.findByIdAndUpdate({ _id: newUser._id }, { token: token })

  return {
    name,
    email,
    token,
  }
}

module.exports = addUser
