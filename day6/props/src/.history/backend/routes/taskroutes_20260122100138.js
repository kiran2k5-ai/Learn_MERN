const express = require("express")
const router = express.Router()

const {create_task,linkage} = require('../controllers/taskcontroller')
const {protect} = require('../middleware/middleware')
router.post('/task',protectcreate_task)
router.post('/link',linkage)


module.exports = router