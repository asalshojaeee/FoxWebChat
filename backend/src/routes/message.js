

const express = require('express')
const protectRoute = require('../middleware/protectRoute')
const getUserController = require('../controllers/getUserController')
const getMessages = require('../controllers/getMessages')
const sendMessages = require('../controllers/sendMessages')

const router = express.Router()




router.get('/users',protectRoute,getUserController)



router.get('/:id',protectRoute,getMessages)


router.post('/send/:id',protectRoute,sendMessages)


module.exports = router;