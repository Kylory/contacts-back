const { updateUserSubscription } = require('../../model/users')
const { BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  subscription: Joi.string().required(),
})

const subscription = async (req, res) => {
  const { _id } = req.user
  const data = req.body
  const { error } = joiSchema.validate(req.body)

  // subscription має бути одне з 3-х значень ['starter', 'pro', 'business']
  if (error || !['starter', 'pro', 'business'].includes(data.subscription)) {
    throw new BadRequest('missing field subscription')
  }

  const { subscription } = await updateUserSubscription(_id, data)

  res.json({ message: 'User subscription updated', subscription })
}

module.exports = { subscription }
