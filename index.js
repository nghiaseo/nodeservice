const app= require('./app')
const config = require('./configs/config')
const http = require('http')
const server = http.createServer(app)
const socket = require('socket.io')(server,{cors:{origin:'*'}})
socket.on("connection",sk=>{
    console.log('connected with id '+sk.id)
    sk.on("sendDataClient",(data)=>{
        console.log(data)
        socket.emit("sendDataServer",{data})
    })
})

socket.on("disconnect",()=>console.log('disconnect'))
server.listen(config.port)
