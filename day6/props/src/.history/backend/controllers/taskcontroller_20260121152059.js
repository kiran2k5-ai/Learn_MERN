const task = require("../models/task")
const user = require("../models/user")
const task = require("../models/user")

exports.create_task = async(req,res) => {
        const {title,description,status,user} = req.body

        const tasks = task.create({title,description,status,user})

        res.status(201).send("Task Collection is created")
}

exports.linkage = async(req,res) =>{
    const {users} = req.body

    const f = await user.findOne(users)
    res.send()
}