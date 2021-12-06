// Функція-обгортка для інших функцій (щоб не писати trycatch кожен раз)
// Приймає функцію і викликає її всередині trycatch
const controllerWrapper = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = controllerWrapper
