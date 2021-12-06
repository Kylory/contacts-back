const controllerWrapper = require('./controllerWrapper')
const authMiddleware = require('./authMiddleware')
const updateAvatarMiddleware = require('./updateAvatarMiddleware')

module.exports = {
  controllerWrapper,
  authMiddleware,
  updateAvatarMiddleware,
}
