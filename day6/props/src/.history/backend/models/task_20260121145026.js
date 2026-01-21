const mongoose = require('mongoose')
const user = require('./user')

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
    },
    user:{
        type:mongoose.Schema.Types
    }
})

module.exports = mongoose.model('taskSchema',taskSchema)