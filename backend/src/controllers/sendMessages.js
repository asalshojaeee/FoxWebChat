

const messageModel = require('../models/message')

const sendMessages = async (req, res) => {
    try {

        const { text } = req.body;
        const { id: receiverId } = req.params;

        const senderId = req.user._id;

        let imageUrl;

        if (req.file) {
            imageUrl = `/uploads/messages/${req.file.filename}`;
        }

        const newMessage = new messageModel({
            senderId,
            receiverId,
            text,
            image: imageUrl
        })


        await newMessage.save()

        res.status(201).json(
        newMessage
        );

    } catch (err) {
        console.log(err.message);

        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = sendMessages;