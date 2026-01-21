const express = require("express")
const router = express.Router()

const {register,login} = require('../controllers/authController')
const {create_task,linkage} = require('../controllers/taskcontroller')

router.post('/register',register)
router.post('/login',login)
router.post('/task',create_task)
router.post('/link')

module.exports = router