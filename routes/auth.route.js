const express = require('express')
const authController = require('../controllers/auth.controller')
const authMidware = require('../middleware/auth.mid')

const router = express.Router()
router.get('/:username',authController.getAuth)
router.post('/register',authMidware,authController.register)
router.post('/login',authController.login)
module.exports =  router
