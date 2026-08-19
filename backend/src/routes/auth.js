


const express = require('express')





const router = express.Router()
const signUpControllers = require('../controllers/signUpControllers')
const loginControllers = require('../controllers/loginControllers')
const logOutControllers = require('../controllers/logOutControllers')

router.post("/signup", signUpControllers)


router.post("/login", loginControllers)
router.post("/logout", logOutControllers)





module.exports = router