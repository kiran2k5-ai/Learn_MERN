const jwt = require('jsonwebtoken')

exports.protect = (req,res,next) =>{
    const token = req.headers.authorization
    if(!token || !token.startsWith('Bearer')){
        res.status(401).json({msg:"Not authorized"})
    }
    

try{
    const tok = token.split(' ')[1];
    const decoded = jwt.verify(tok,process.evnjwt_secret_key)
    req.user = decoded
    return next()
}catch(error){
    res.status(400).json({msg:"Invalid"})
}
}