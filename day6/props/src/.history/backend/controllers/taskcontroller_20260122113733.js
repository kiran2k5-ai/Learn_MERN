const task = require("../models/task")
const user = require("../models/user")

exports.create_task = async(req,res) => {
        const {title,description,status,user} = req.body

        const tasks = task.create({title,description,status,user:req.user.id})

        res.status(201).send("Task Collection is created")
}


exports.retrivetask = async (req,res)=>{
    const retrive = await task.findOne({user:req.user.id})
    res.json({retrive:{retrive._}})
}



exports.linkage = async(req,res) =>{
    const {users} = req.body

    const f = await user.findOne(users)
    res.status(200).send(f)
}