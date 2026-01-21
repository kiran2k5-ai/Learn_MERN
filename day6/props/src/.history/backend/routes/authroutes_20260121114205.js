const express = require("express")
const router = express.router()

const {register} = require('../controllers/authController')

router.post('/register','register)