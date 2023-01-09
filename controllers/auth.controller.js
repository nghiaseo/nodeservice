const userService = require('../services/user.service')

const getAuth = (req,res)=>{
    const username = req.params.username
    userService.getUser(username).then((result)=>{
        res.status(result.status).send(result.data)
    })    
}
const register = (req,res)=>{
    const {username,password} = req.body
    userService.createUser(username,password).then(result=>{
        res.status(result.status).send(result.data)
    })
}
const login = (req,res)=>{
    const {username,password} = req.body
    userService.login(username,password).then(result=>{
        res.status(result.status).send(result.data)
    })
}

module.exports = {
    getAuth,
    register,login
}