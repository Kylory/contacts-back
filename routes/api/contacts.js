const express = require('express')
const router = express.Router()
const { controllerWrapper, authMiddleware } = require('../../middlewares')
const {
  getAll,
  getById,
  add,
  updateById,
  removeById,
} = require('../../controllers/contacts')

router.use(authMiddleware)

router.get('/', controllerWrapper(getAll))

router.get('/:contactId', controllerWrapper(getById))

router.post('/', controllerWrapper(add))

router.delete('/:contactId', controllerWrapper(removeById))

router.put('/:contactId', controllerWrapper(updateById))

module.exports = router
