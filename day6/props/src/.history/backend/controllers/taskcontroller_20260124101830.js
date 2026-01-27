const task = require("../models/task")
const user = require("../models/user")

exports.create_task = async(req,res) => {
        const {title,description,status,user} = req.body

        const tasks = task.create({title,description,status,user:req.user.id})

        res.status(201).send("Task Collection is created")
}



exports.retrivetask = async (req,res)=>{
    const user = req.
    const retrive = await task.findOne({user})
    res.send(retrive)
}

exports.updatetask = async(req,res) =>{
    const {title} = req.body
    const update = await task.findByIdAndUpdate({_id:req.params.id,
        user:req.user.id},{title})
    
}

exports.deletetask = async(req,res) =>{
    const update = await task.findByIdAndDelete({_id:req.params.id,
        user:req.user.id})
    
}


exports.linkage = async(req,res) =>{
    const {users} = req.body

    const f = await user.findOne(users)
    res.status(200).send(f)
}