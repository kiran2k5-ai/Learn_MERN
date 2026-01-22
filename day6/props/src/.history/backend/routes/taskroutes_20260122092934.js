const express = require("express")
const router = express.Router()

const {create_task,linkage} = require('../controllers/taskcontroller')
const {protect} = requie('../middleware/')
router.post('/task',create_task)
router.post('/link',linkage)

module.exports = router