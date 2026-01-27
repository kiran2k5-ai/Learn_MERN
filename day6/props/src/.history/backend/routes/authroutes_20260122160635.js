const express = require("express")
const router = express.Router()

const {register,login} = require('../controllers/authController')


router.post('/register',register)
router.post('/login',login)

module.exports = router
D:\training\learning1\day6\props\src\backend\routes\authroutes.js