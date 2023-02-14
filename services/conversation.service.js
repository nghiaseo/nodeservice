const execute = require('./execute')
const StatusCodes = require('http-status-codes').StatusCodes
const getAllMessage = async()=>{
    try{

    }
    catch(e){
        return{
            status:500,
            data:e
        }
    }
}
const insertMessage = async(message)=>{
    const query_createtb = `create table if not exists conversation(
        couple varchar NOT NULL,
        sender varchar NOT NULL,
        receiver varchar NOT NULL,
        message varchar NOT NULL,
        createtime timestamp NOT NULL        
    )`;
  await execute(query_createtb);
    try{
        const sender = message.sender
        const receiver = message.receiver
        const couple = sender<receiver?sender+'-'+receiver:receiver+'-'+sender
        const mess = message.message
        const createtime = Date.now()/1000.0
        if(!sender||!receiver||!mess)
        return{
            status:StatusCodes.BAD_REQUEST,
            data:{
                message:'Thiếu dữ liệu'
            }
        }
        const query_insertMessage = `insert into conversation (couple,sender,receiver,message,createtime)
         values ('${couple}','${sender}','${receiver}','${mess}',to_timestamp(${createtime}))`
         await execute(query_insertMessage)
         return{
            data:{
                message:'Gửi tin nhắn thành công',
                data:message
            },
            status:StatusCodes.OK
         }
    }
    catch(e){
        return{
            status:500,
            data:e
        }
    }
}
module.exports = {
    insertMessage,
    getAllMessage
}