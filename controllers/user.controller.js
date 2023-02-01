const userService = require('../services/user.service')
const getAllUsers = (req,res)=>{
    userService.getAllUsers().then(result=>{
        res.status(result.status).send(result.data)
    })
}
module.exports={
    getAllUsers
}