
const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number
    },
    department:{
        type:String
    },
    isActive:{
        type:String,
        enum:["active","unactive"],
        default
    }
})

module.exports = mongoose.model("Student",studentSchema)
console.log("Successfull created Student Schema")