/* eslint-disable no-unused-vars */
const jwt = require('jsonwebtoken')
const { User } = require('../db/userModel')
require('dotenv').config()

const getUserByToken = async (token) => {
  return await User.findOne({ token })
}

const unauthorized = (res) => {
  res.status(401).json({
    Status: '401 Unauthorized',
    'Content-Type': 'application/json',
    ResponseBody: {
      message: 'Not authorized',
    },
  })
}

const authMiddleware = async (req, res, next) => {
  // Перевіряємо чи headers.authorization взагалі прийшов
  if (!req.headers.authorization) {
    unauthorized(res)
    return
  }

  // Перевіряємо чи є в headers.authorization токен
  const [tokenType, token] = req.headers.authorization.split(' ')
  if (!token || tokenType !== 'Bearer') {
    unauthorized(res)
    return
  }

  // Шукаємо юзера по токену в DB
  const user = await getUserByToken(token)
  if (!user) {
    unauthorized(res)
    return
  }

  // Декодимо ID юзера з токена
  const userId = jwt.decode(token, process.env.JWT_SECRET)
  if (!userId) {
    unauthorized(res)
    return
  }

  // Порівнюємо ID з DB і з headers.authorization токена
  if (user._id.toString() !== userId._id) {
    unauthorized(res)
    return
  }

  // Якщо всі дані валідниі - додаємо їх в req
  req.token = token
  req.user = userId

  next()
}

module.exports = authMiddleware
