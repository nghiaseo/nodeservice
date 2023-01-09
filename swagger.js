const swaggerui = require('swagger-ui-express')
const swaggerDoc = require('swagger-jsdoc')
const options = {
    definition:{
        openapi:'3.0.0',
        info:{
            title:'My App API',
            description:'',
            version:'1.0.0'
        }
    },
    apis:['./routes/*.js']
}
const swaggerSpec = swaggerDoc(options)
const swaggerDocs = (application,port)=>{
    application.use('/doc',swaggerui.serve,swaggerui.setup(swaggerSpec))
}
module.exports = swaggerDocs