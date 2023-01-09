const jwt = require('jsonwebtoken')
const key = require('../configs/config').key
const StatusCodes = require('http-status-codes').StatusCodes
const authenticateToken = (req,res,next)=>{
    const header_author = req.headers['authorization']
    const token =header_author && header_author.split(' ')[1]
    if(!token) return res.sendStatus(StatusCodes.UNAUTHORIZED)
    jwt.verify(token,key,(e)=>{
        if(e) return res.sendStatus(StatusCodes.FORBIDDEN)
        next()
    })
}
module.exports = authenticateToken