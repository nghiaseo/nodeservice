const express = require('express')
const homeController = require('../controllers/app.controller')
const router = express.Router()
router.get('/',homeController.startApp)
module.exports = router
