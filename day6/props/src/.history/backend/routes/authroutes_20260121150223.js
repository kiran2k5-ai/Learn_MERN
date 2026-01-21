const express = require("express")
const router = express.Router()

const {register,login} = require('../controllers/authController')
const {task} = require('../controllers/taskcontroller')

router.post('/register',register)
router.post('/login',login)
router.post('/task',create_task)

module.exports = router