const execute = require("./execute");
const tokenService = require('./token.service')
const StatusCodes= require('http-status-codes').StatusCodes
const getAllUsers = async()=>{
  try {
    const q = `select (username,fullname) from hanuser`
    const res = await execute(q)
    const data = res.rows.map(row=>{
      const rowData =  row.row.replace("(",'').replace(")",'').split(',')
      return{
        username:rowData[0],
        fullname:rowData[1].replace(/"/g,'')
      }
    })
    return {
      status: StatusCodes.OK,
      data: {
        data
      }
    }
  } catch (e) {
    return {
      status: 500,
      data: e,
    };
  }
}
const getUser = async (username,password = '') => {
  try {
    const query = password?`select * from hanuser where username = '${username}' and password = '${password}'` 
    :`select * from hanuser where username = '${username}' `
    ;
    const res = await execute(query);
    if (res.rowCount == 0)
      return {
        status: StatusCodes.BAD_REQUEST,
        data: {
          message: "User không tồn tại",
        },
      };
    else
      return {
        status: StatusCodes.OK,
        data: {
          data: res.rows[0],
        },
      };
  } catch (e) {
    return {
      status: 500,
      data: e,
    };
  }
};
const createUser = async (username, password) => {
  const query_createtb = `create table if not exists hanuser(
        id serial NOT NULL,
        username varchar NOT NULL,
        password varchar NOT NULL,
        primary key (id)
    )`;
  await execute(query_createtb);
  try {
    const getU = await getUser(username);
    
    if (getU.status==StatusCodes.OK) {
      return {
        data: {
          message: "Username đã tồn tại!",
        },
        status: StatusCodes.BAD_REQUEST,
      };
    } else {
      const query_insertUser = `insert into hanuser (username,password) values ('${username}','${password}')`;
      await execute(query_insertUser);
      const getU = await getUser(username);
      return {
        data: {
          message: "Đăng ký thành công",
          data: getU.data.data,
        },
        status: StatusCodes.OK,
      };
    }
  } catch (e) {
    return e;
  }
};
const login = async(username,password)=>{
   
    try{
        const getU = await getUser(username,password)
        if(getU.status == StatusCodes.OK){
            const token = tokenService.generateToken(getU.data.data)
            return {
                status:StatusCodes.OK,
                data:{
                    token
                }
            }
        }
        else return {
            status:StatusCodes.BAD_REQUEST,
            data:{
                message:'Sai tên hoặc mật khẩu'
            }
        }
    }
    catch(e){
        return {
           
            status:StatusCodes.INTERNAL_SERVER_ERROR
        }
    }
}
module.exports = {
  getUser,
  createUser,
  login,
  getAllUsers
};
