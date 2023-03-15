const router = require('express').Router();
const jwt =require('jsonwebtoken');
const {JWT_SECRET} = require('../../config/index');

router.get('/', (req,res,next)=>{
    res.status(200).json({message: 'little authbird was here...'});
})

router.post('/register', (req,res,next)=>{
    res.status(200).json({message: 'new little bird will register...'});
})

router.post('/login', (req,res,next)=>{
    const user = {userd_id: 1, role: 'user'};
    const token = generateToken(user);
    res.status(200).json({message: 'little bird has entered...',token});
})

function generateToken(user){
    const payload = {id: user.user_id, role: user.role};
    const options = {expiresIn: '1d'};
    const token = jwt.sign(payload, JWT_SECRET, options);
    return token;
}



module.exports = router;