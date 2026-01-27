const express = require("express")

const router = express.Router()
const {register} = require("../controllers/studentController")
router.post("/studregister",studentregister)
module.exports = router