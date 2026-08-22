
const logOutControllers = (req, res) => {

    try {





        res.cookie("token", "")


        res.status(200).json({ message: "Logged out successfully" })


    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Internal Server Error"
        })


    }

}





module.exports = logOutControllers