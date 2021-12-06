const fs = require('fs').promises
const path = require('path')
const { updateUserAvatar } = require('../../model/users')
const Jimp = require('jimp')

const avatar = async (req, res, next) => {
  const { path: tempDir, originalname } = req.file

  // Зменшуємо розмір завантаженого аватару до 250х250
  await Jimp.read(tempDir)
    .then((image) => {
      return image.resize(250, 250).write(tempDir)
    })
    .catch((err) => {
      console.error(err)
    })

  // Додаємо до назви ID юзера для унікальності назви аватару
  const { _id } = req.user
  const [extension] = originalname.split(' ').reverse()
  const filename = `${_id}-${extension}`

  // Переміщаємо аватар в public/avatars
  const uploadDir = path.join(__dirname, '../../', 'public/avatars', filename)
  try {
    await fs.rename(tempDir, uploadDir)
    await updateUserAvatar(_id, uploadDir)
    res.json({
      ResponseBody: {
        avatarURL: uploadDir,
      },
    })
  } catch (error) {
    // Якщо щось пішло не так, то видаляємо завантажений аватар з тимчасової папки
    await fs.unlink(tempDir)
    next(error)
  }
}

module.exports = { avatar }
