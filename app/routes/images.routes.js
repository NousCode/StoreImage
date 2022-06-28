const route = require('express').Router()
const storage = require('../../config/multer')
const multer = require('multer')
const uploaderBanners = multer({ storage })

const { newProfile, newBanner } = require('../controller/image.controller')

route.post('/uploadProfile', uploaderBanners.single('file'), newProfile)
route.post('/uploadBanner', uploaderBanners.single('file'), newBanner)

module.exports = route