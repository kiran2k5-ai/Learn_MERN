const task = require("../models/task")

exports.create_task = async(req,res) => {
        const {title,description,status,user} = req.body

        const tasks = task.create({title,description,status,user})

        res.status(201).send("Task Collection is created")
}

exports.linkage = async(req,res) =>{
    const {user} = req.body

}