const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user = require('../models/user')

exports.register = async(req,res) =>{
    const {name,email,password} = req.body
    const exist =  await user.findOne({email})

    if(exist){
        res.status(400).json({message:"Email already present"})
    }

    const hashpassword = await bcrypt.hash(password,10)

    const users = user.create({
        name,
        email,
        password:hashpassword
    })

    res.status(201).json({message:"User register successfull"})

}

exports.login()