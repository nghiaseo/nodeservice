const convService = require('../services/conversation.service')
const insertMessage = (req,res)=>{
    const message = req.body
    convService.insertMessage(message).then(result=>{
        res.status(result.status).send(result.data)
    })
}
module.exports = {
    insertMessage
}