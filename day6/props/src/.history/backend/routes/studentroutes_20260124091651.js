const express = require("express")

const router = express.Router()
const studentregister = require("../controllers/studentController")
router.post("/studregister",studentregister)
module.expor