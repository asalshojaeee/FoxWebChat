


const express = require('express')





const router = express.Router()
const signUpControllers = require('../controllers/signUpControllers')
const loginControllers = require('../controllers/loginControllers')
const logOutControllers = require('../controllers/logOutControllers')
const protectRoute = require('../middleware/protectRoute')
const checkAuthController = require('../controllers/checkAuthController')
const multer = require('multer')
const updateProfile = require('../controllers/updateProfileController')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/profile")
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

const upload = multer({ storage })
router.post("/signup", signUpControllers)


router.post("/login", loginControllers)
router.post("/logout", logOutControllers)

router.post(
    "/profile",
    protectRoute,
    upload.single("profilePic"),
    updateProfile
)

router.get("/check", protectRoute,checkAuthController)



module.exports = router