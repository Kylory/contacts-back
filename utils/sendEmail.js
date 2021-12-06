const sgMail = require('@sendgrid/mail')
require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = async (data) => {
  const email = { ...data, from: 'krllmsk@gmail.com' }
  try {
    await sgMail.send(email)
    return true
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = sendEmail
