const bcrypt = require('bycryptjs')
const jwt = require('jsonwebtoken')
const user = require('..models/user.js')

exports.register = async(req,res) =>{
    const {name,email,password} = req.body
    const exist =  await user.findOne(email)

    if(exist){
        res.status(400).send({message:"Email already present"})
    }

    const hashpassword = b
}