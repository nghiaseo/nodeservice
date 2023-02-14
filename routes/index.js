const express =  require('express')
const homeRoute =  require('./home.route')
const authRoute = require('./auth.route')
const userRoute = require('./user.route')
const conversationRoute = require('./conversation.route')
const router = express.Router()

const routes = [
    {
        path:'/',
        route:homeRoute
    },
    {
        path:'/auth',
        route:authRoute
    },
    {
        path:'/user',
        route:userRoute
    },
    {
        path:'/conversation',
        route:conversationRoute
    }

]
routes.forEach(r=>{
    router.use(r.path,r.route)
})
module.exports = router
