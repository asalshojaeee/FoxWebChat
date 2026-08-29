
const userModel = require('../models/user')

const updateProfile = async (req, res) => {

    try {

        const userId = req.user._id
        const profilePic = req.file

        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            {
                profilePic: `/uploads/profile/${profilePic.filename}`
            },
            {
                new: true
            }
        )

        res.json(updatedUser)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = updateProfile