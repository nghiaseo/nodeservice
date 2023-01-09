const {Client} = require('pg')
const config = require('../configs/config')
const connectInfo = {
    user:config.userPG,
    password:config.passwordPG,
    host:config.host,
    port:config.portPG,
    database:config.databasePG
}
const execute = async(query='')=>{
    try{
    const client = new Client(connectInfo)
    await client.connect()
    const res = await client.query(query)
    await client.end()
    return res
    }
    catch(e){
    }
}
module.exports = execute