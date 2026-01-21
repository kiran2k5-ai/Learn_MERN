const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({

    title:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    status:{
        type:String
    }
})