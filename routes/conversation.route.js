const express = require('express')
const authMidware = require('../middleware/auth.mid')
const converController = require('../controllers/conversation.controller')
const router = express.Router()
router.post('/create-mess',authMidware,converController.insertMessage)
module.exports = router