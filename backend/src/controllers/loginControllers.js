

const bcrypt = require('bcrypt')
const userModel = require('../models/user')
const generateToken = require('../token/token')
const loginControllers = async (req, res) => {


    try {


        const { email, password } = req.body



        const user = await userModel.findOne({ email })


        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }



        const isPasswordCorrect = await bcrypt.compare(password, userModel.password)


        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }


        generateToken(userModel._id, res)


        res.status(200).json({
            _id: userModel._id,
            fullName: userModel.fullName,
            email: userModel.email,
            profilePic: userModel.profilePic

        })




    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Internal Server Error"
        })


    }

}



module.exports = loginControllers