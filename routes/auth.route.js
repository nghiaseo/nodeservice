const express = require('express')
const authController = require('../controllers/auth.controller')
const authMidware = require('../middleware/auth.mid')

const router = express.Router()
router.get('/:username',authMidware,authController.getAuth)
router.post('/register',authController.register)
router.post('/login',authController.login)
module.exports =  router
