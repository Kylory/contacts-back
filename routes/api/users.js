const express = require('express')
const router = express.Router()
const {
  controllerWrapper,
  authMiddleware,
  updateAvatarMiddleware,
} = require('../../middlewares')

const {
  signup,
  login,
  logout,
  current,
  subscription,
  avatar,
  verify,
  reVerify,
} = require('../../controllers/users')

// Для всіх маршрутів, які будуть нижче
// router.use(authMiddleware)

// Або писати authMiddleware в усіх, де потрібно

router.patch('/', authMiddleware, controllerWrapper(subscription))

router.post('/signup', controllerWrapper(signup))

router.post('/login', controllerWrapper(login))

router.post('/logout', authMiddleware, controllerWrapper(logout))

router.get('/current', authMiddleware, controllerWrapper(current))

router.get('/verify/:verificationToken', controllerWrapper(verify))

router.post('/verify', controllerWrapper(reVerify))

router.patch(
  '/avatars',
  authMiddleware,
  updateAvatarMiddleware.single('avatar'),
  controllerWrapper(avatar)
)

module.exports = router
