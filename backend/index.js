


const express = require('express')


const authRoutes = require('./src/routes/auth')
const messageRoutes = require('./src/routes/message')
const connectDB = require('./src/db/config')
const multer = require("multer")

const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use("/uploads", express.static("uploads"));
require('dotenv').config();


app.listen(process.env.PORT, () => {

    console.log("server is running")
    connectDB()


})