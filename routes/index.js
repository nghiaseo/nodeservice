const express =  require('express')
const homeRoute =  require('./home.route')
const authRoute = require('./auth.route')
const router = express.Router()

const routes = [
    {
        path:'/',
        route:homeRoute
    },
    {
        path:'/auth',
        route:authRoute
    }
]
routes.forEach(r=>{
    router.use(r.path,r.route)
})
module.exports = router
