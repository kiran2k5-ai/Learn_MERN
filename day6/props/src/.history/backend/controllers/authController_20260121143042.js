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

exports.login = async(req,res)=>{
    const {email,password} = req.body
    const hashpassword = await bcrypt.hash(password,10)
    const exist = await user.find({email})

    if (!exist){
        res.status(201).send({message:"E-mail not found"})
    }
    const ismatch = bcrypt.compare(password,)

    const token = jwt.sign(
        {id:exist._id},
        process.env.jwt_secret_key
    )
    res.json({token:{token}})
    res.status(200).send("Login successful")
    
}