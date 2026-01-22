const jwt = require('jsonwebtoken')

exports.protect = (req,res,next) =>{
    const token = req.headers.authorization
    if(!token || !token.startsWith('Bearer')){
        req.status(401).json({msg:"Not authorized"})
    }
}
try{
    token = 
}