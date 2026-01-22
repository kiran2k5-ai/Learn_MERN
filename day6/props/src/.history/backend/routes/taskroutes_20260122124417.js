const express = require("express")
const router = express.Router()

const {create_task,linkage,retrivetask,updatetask,deletetask} = require('../controllers/taskcontroller')
const {protect} = require('../middleware/middleware')
router.post('/task',protect,create_task)
router.post('/link',linkage)
router.post('/retrive/:id',protect,retrivetask)
router.post('/update/:id',protect,updatetask)
router.post('/delete/:id',protect,deletetask)


module.exports = router