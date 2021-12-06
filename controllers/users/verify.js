const { User } = require('../../db/userModel')

const verify = async (req, res) => {
  const { verificationToken } = req.params
  const user = await User.findOne({ verifyToken: verificationToken })

  if (!user) {
    res.status(404).json({
      Status: '404 Not Found',
      'Content-Type': 'application/json',
      ResponseBody: {
        message: 'User not found',
      },
    })
    return
  }

  await User.findByIdAndUpdate(user._id, { verify: true, verifyToken: null })
  res.json({
    Status: '200 OK',
    'Content-Type': 'application/json',
    ResponseBody: {
      message: 'Verification successful',
    },
  })
}

module.exports = { verify }
