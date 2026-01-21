const express = require("express")
const router = express.Router()

const {register,login} = require('../controllers/authController')
const {task} = res

router.post('/register',register)
router.post('/login',login)
router.post('/task',task)

module.exports = router