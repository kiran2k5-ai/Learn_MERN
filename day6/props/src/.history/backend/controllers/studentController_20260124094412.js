const student = require("../models/student")

exports.register = async(res,req)=>{
    const {name,email,age,department,isActive} = req.body
    console.log()
    const exist = await student.findOne({email})
    if (exist){
        res.send("Student already present")
    }
    const stu = await student.create({name,email,age,department,isActive})
    res.send("Student have been Successfully register!!!")
}