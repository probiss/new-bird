const router = require('express').Router();
const Birds = require('./birds-model');

router.get('/', async (req,res,next)=>{
    try {
        const birds = await Birds.getAll();
        res.status(200).json(birds);
    } catch (error) {
        next(error)
    }
    
})

router.get('/:id', async (req,res,next)=>{
    try {
        const bird = await Birds.getById(req.params.id)
        res.status(200).json(bird);
    }
    catch (error) {
        next(error);
    }
})

router.post('/', async (req,res,next)=>{
try {
    const bird =req.body;
    const newBird = await Birds.create(bird);
    res.status(200).json(newBird);
} catch (error) {
    next(error);
}
})

router.put('/:id', async (req,res,next)=>{
    try {
        const bird =req.body;
        const updatedBird = await Birds.updateById(bird,req.params.id);
        res.status(200).json(updatedBird);
    } catch (error) {
        next(error);
    }
})

router.delete('/:id', async (req,res,next)=>{
    try {
        const {id} = req.params;
        await Birds.deleteById(id);
        res.status(200).json({message: `${id}. little twitbird deleted...`});
    } catch (error) {
        next(error)
    }
})


module.exports = router;