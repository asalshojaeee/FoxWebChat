

const userModel = require('../models/user')

const jwt = require("jsonwebtoken")





const protectRoute = async (req, res, next) => {
    try {



        const token = res.cookie.token


        if (!token) {
            return res.status(401).json({
                message: "Unthorized - No Token Provided"

            })
        }


        const decoded = jwt.verify(token, process.env.TOKEN_KEY)
        if (!decoded) {
            return res.status(401).json({
                message: "Unthorized - Invalid Token"
            })
        }






        const user = await userModel.findById(decoded.usreId).select("-password")


        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }

        req.user = user
        next()

    }
    catch (error) {

        console.log(error.message)
    }
}