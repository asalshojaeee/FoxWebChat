

const userModel = require('../models/user')

const getUserController = async (req, res) => {
    try {


        const loggedInUserId = req.user._id


        const filteredUsers = await userModel.find({ _id: { $ne: loggedInUserId } }).select("-password")
        res.status(200).json(filteredUsers)
    }
    catch (err) {
        console.log(err.message)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}




module.exports = getUserController