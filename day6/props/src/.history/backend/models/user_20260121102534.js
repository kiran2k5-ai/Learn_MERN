const mongoose = require("mongoose")

const mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    age:{
        type:Number
    }
})

module.export = mongoose.model('user',userSchema)