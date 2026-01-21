const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:Number,
        require:true,
        unique:true
    },
    password:{
        type:Number
    }
})

module.exports = mongoose.model('user',userSchema)
console.log("Successful")