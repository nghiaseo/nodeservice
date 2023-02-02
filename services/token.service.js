const jwt = require('jsonwebtoken')
const key = require('../configs/config').key
const generateToken = (user)=>
    jwt.sign({
    username:user.username,
    id:user.id,
    fullname:user.fullname,
    email:user.email,
    location:user.location
},key,{expiresIn:1800})


module.exports = {
    generateToken
}