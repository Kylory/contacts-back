const { User } = require('../../db/userModel')
const { sendEmail } = require('../../utils')
const Joi = require('joi')

const joiSchema = Joi.object({
  email: Joi.string().required(),
})

const reVerify = async (req, res) => {
  const { error } = joiSchema.validate(req.body)

  if (error) {
    res.status(400).json({
      Status: '400 Bad Request',
      'Content-Type': 'application/json',
      message: 'Missing required field email',
    })
    return
  }

  // Якщо юзера з таким email немає в БД
  const { email } = req.body
  const user = await User.findOne({ email: email })

  if (!user) {
    res.status(404).json({
      Status: '404 Not Found',
      'Content-Type': 'application/json',
      ResponseBody: {
        message: 'Email not found',
      },
    })
    return
  }

  // Якщо юзер є, але уже верифікований
  if (user.verify) {
    res.status(400).json({
      Status: '400 Bad Request',
      'Content-Type': 'application/json',
      ResponseBody: {
        message: 'Verification has already been passed',
      },
    })
    return
  }

  // Якщо юзер з таким email є і він не верифікований
  const message = {
    to: user.email,
    subject: 'Confrim registration',
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verifyToken}">Click to confrim registration</a>`,
  }

  sendEmail(message)

  res.json({
    Status: '400 Bad Request',
    'Content-Type': 'application/json',
    ResponseBody: {
      message: 'Verification email sent',
    },
  })
}

module.exports = { reVerify }
