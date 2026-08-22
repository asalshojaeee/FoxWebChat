


const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const generateToken = require('../token/token')



const signUpControllers = async (req, res) => {


    try {



        const { fullName, email, password }



        if (!fullName || !email || !password) {
            return res.status(400).json({
                message: "All filesd required"
            })
        }
        if (password.lenght < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters"
            })
        }


        const user = await userModel.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "Email already exists" })
        }


        const salt = await bcrypt.genSalt(10)


        const hashPassword = await bcrypt.hash(password, salt)


        const newUser = await userModel({
            fullName,
            email,
            password: hashPassword
        })


        if (newUser) {


            generateToken(newUser._id, res)
            await newUser.save()


            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic

            })


        }
        else {
            return res.status(400).json({ message: "Invalid user data" })

        }

    }

    catch (error) {
        console.log(error.message)
    }





}



module.exports = signUpControllers