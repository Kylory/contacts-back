const { loginUser } = require('../../model/users')
const Joi = require('joi')

const joiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
})

const login = async (req, res) => {
  const { error } = joiSchema.validate(req.body)

  if (error) {
    res.status(400).json({
      Status: '400 Bad Request',
      'Content-Type': 'application/json',
      ResponseBody: 'Validation error',
    })
    return
  }

  // Поверне null, якщо юзера немає в БД
  const result = await loginUser(req.body)

  if (!result) {
    res.status(401).json({
      Status: '401 Unauthorized',
      'Content-Type': 'application/json',
      ResponseBody: {
        message: 'Email or password is wrong',
      },
    })
    return
  }

  res.status(201).json({
    Status: '200 OK',
    'Content-Type': 'application/json',
    ResponseBody: {
      token: result.token,
      user: {
        name: result.user.name,
        email: result.user.email,
      },
    },
  })
}

module.exports = {
  login,
}
