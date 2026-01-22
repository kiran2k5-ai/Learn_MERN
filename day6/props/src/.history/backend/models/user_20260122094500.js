const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:,
        require:true,
        unique:true
    },
    password:{
        type:String
    }
})

module.exports = mongoose.model('user',userSchema)
console.log("Successful")