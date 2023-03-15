const router = require('express').Router();
const Users = require('./users-model');
const {checkId} = require("./users-middleware");


//for owner
router.get('/', async (req,res,next)=>{
        const users = await Users.getAll();
        res.status(200).json(users);
    })

router.get('/:id', /*checkId,*/ async (req,res,next)=>{
    try {
        const user = await Users.getById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
    
})


router.delete('/:id', async (req,res,next)=>{
    try {
        await Users.deleteUser(req.params.id);
        res.status(200).json({message: 'little userbird deleted...'});
    } catch (err) {
        next(err)
    }
})


//for users
router.put('/:id', async (req,res,next)=>{
    try {
        const user = await Users.updateById(req.body, req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
    
})

router.use((err, req, res, next) => {
    res.status(err.status).json({ message: err.message });
});

module.exports = router;