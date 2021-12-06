const { getAll } = require('./getAll')
const { getById } = require('./getById')
const { add } = require('./add')
const { updateById } = require('./updateById')
const { removeById } = require('./removeById')
const { updateStatusById } = require('./updateStatusById')

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  removeById,
  updateStatusById,
}
