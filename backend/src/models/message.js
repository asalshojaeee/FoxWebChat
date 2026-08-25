




const mongoose = require('mongoose')



const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.ObjectId,
        ref: User,
        unique: true

    },
    senderId: {
        type: mongoose.Schema.ObjectId,
        ref: User,
        unique: true

    }, text: {
        type: String,

    },

    image: {
        type: String,


    },

}, { timestamps: true }

)



const Message = mongoose.model("Message", messageSchema)


module.exports = Message 