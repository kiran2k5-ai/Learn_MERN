const student = require("../models/student")

exports.register = async(res,req)=>{
    const {name,email,age,department,isActive} = req.body
    const exist = student.findOne({})
}