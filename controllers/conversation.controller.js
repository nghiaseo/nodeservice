const convService = require('../services/conversation.service')
const insertMessage = (req,res)=>{
    const message = req.body
    convService.insertMessage(message).then(result=>{
        res.status(result.status).send(result.data)
    })
}
const getConversation = (req,res)=>{
    const coupleIds = req.body
    convService.getConversation(coupleIds).then(result=>{
        res.status(result.status).send(result.data)
    })
}
module.exports = {
    insertMessage,
    getConversation
}