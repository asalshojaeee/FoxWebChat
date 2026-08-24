const updateProfileController = require("../controllers/updateProfileController")


const protectRoute = require('../middleware/protectRoute')
const { route } = require("./auth")



const router = express.Router()




router.put("update-profile",protectRoute,updateProfileController)