const jwt = require('jsonwebtoken')

exports.protect = (req,res,next) =>{
    const token = req.headers.authorization
    if(!token || !token.startsWith('Bearer')){
        req.status(401).json({msg:"Not authorized"})
    }
}
try{
    token = token.split(' ')[1];
    const decoded = jwt.verify(token,jwt_secret_key)
    req.user = decoded
    next
}catch(error){
    res.send("Invalid")
}
