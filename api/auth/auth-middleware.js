const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config/index');

const restricted = (req,res,next) => {
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token,JWT_SECRET,(err, tokenPayload) => {
            if(err){
                next({status:401,message:"Agaa, token geçersiz!!"});
            }else{
                req.userInfo = tokenPayload;
                next();
            }
        });
    }else{
        next({status:401,message:"Baba, token yok!!"});
    }
}

const protected = (req,res,next) => {
    next();
}


module.exports = {
    restricted,
    protected
}