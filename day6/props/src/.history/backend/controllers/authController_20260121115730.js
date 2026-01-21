const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user = require('../models')

exports.register = async(req,res) =>{
    const {name,email,password} = req.body
    const exist =  await user.findOne(email)

    if(exist){
        res.status(400).send({message:"Email already present"})
    }

    const hashpassword = await bcrypt.hash(password,10)

    const use = user.create({
        name,
        email,
        password:hashpassword
    })

    res.status(201).json({message:"User register successfull"})

}