


const express = require('express')





const  authRoutes = require('./src/routes/auth')

const app = express()



app.use('/api/auth',authRoutes)


require('dotenv').config()

app.listen(process.env.PORT,()=>{

    console.log("server is running")

})