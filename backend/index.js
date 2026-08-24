


const express = require('express')


const authRoutes = require('./src/routes/auth')
const connectDB = require('./src/db/config')


const cookieParser = require('cookie-parser')
const app = express()

app.use(express.json())


app.use('/api/auth', authRoutes);
app.use(cookieParser());
require('dotenv').config();

app.listen(process.env.PORT, () => {

    console.log("server is running")
    connectDB()


})