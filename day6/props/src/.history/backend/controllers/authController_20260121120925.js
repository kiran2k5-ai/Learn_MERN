const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

exports.register = async(req,res) =>{
    const {name,email,password} = req.body
    const exist =  await User.findne({email})

    if(exist){
        res.status(400).json({message:"Email already present"})
    }

    const hashpassword = await bcrypt.hash(password,10)

    const user = User.create({
        name,
        email,
        password:hashpassword
    })

    res.status(201).json({message:"User register successfull"})

}