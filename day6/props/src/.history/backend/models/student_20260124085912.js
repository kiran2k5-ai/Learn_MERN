name,email,age,department,isActive
const mongoose = require("mongoose")

const studentSchema = mongoosse.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    age:{
        type:Number
    },
    department:{
        type:String
    },
    isActive:{
        type:String,
        enum:["active","unactive"]
    }
})

module.exports = mongoose.Schema("Student",studentSchema)