const jwt = require('jsonwebtoken')
const key = require('../configs/config').key
const generateToken = (username)=>
{
    
    return jwt.sign({username},key,{expiresIn:1800000})
}

module.exports = {
    generateToken
}