const express = require('express')
const userController = require('../controllers/user.controller')
const authMidware = require('../middleware/auth.mid')
const router = express.Router()
router.get('/',authMidware,userController.getAllUsers)

module.exports = router