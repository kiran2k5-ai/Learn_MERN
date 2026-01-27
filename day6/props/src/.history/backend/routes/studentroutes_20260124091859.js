const express = require("express")

const router = express.Router()
const {register} = require("../controllers/studentController")
router.post("/studregister",register)
module.exports = router