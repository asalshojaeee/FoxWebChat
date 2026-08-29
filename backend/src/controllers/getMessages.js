

const messageModel = require('../models/message')

const getMessages = async (req, res) => {


    try {
        const { id: userToChatId } = req.params


        const myId = req.user._id


        const messages = await messageModel.find({
            $or: [{ senderId: myId, receiverId: userToChatId },



            { senderId: userToChatId, receiverId: myId }
            ]
        })


        res.status(200).json(messages)

    }

    catch (err) {
        console.log(err.message)
    }

}


module.exports = getMessages