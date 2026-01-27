const student = require("../models/student")

exports.register = async(req,res)=>{
       if (!req.body) {
            return res.status(400).send("Request body missing")
        }
    const {name,email,age,department,isActive} = req.body
    console.log(name)
    const exist = await student.findOne({email})
    if (exist){
        res.send("Student already present")
    }
    const stu = await student.create({name,email,age,department,isActive})
    res.send("Student have been Successfully register!!!")
}

exportes