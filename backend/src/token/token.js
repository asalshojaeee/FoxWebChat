



const jwt = require('jsonwebtoken')
const { model } = require('mongoose')






const generateToken = async (userId, res) => {


    const token = jwt.sign({ userId }, process.env.TOKEN_KEY)


    res.cookie("token", token, {
        httpOnly: true
    })
    return token
}

module.exports = generateToken