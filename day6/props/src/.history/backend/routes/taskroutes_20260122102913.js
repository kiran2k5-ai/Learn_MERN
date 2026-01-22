const express = require("express")
const router = express.Router()

const {create_task,linkage,retrivetask} = require('../controllers/taskcontroller')
const {protect} = require('../middleware/middleware')
router.post('/task',protect,create_task)
router.post('/link',linkage)
router.post('/retrive',retrivetask)


module.exports = router