





const checkAuthController = async (req, res) => {
    try {


        res.status(200).json(req.user)


    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Internal Server Error"
        })


    }
}



module.exports = checkAuthController