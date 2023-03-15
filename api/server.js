const express = require('express');
const server = express();

const authRouter = require('./auth/auth-router');
const birdRouter = require('./birds/birds-router');
const userRouter = require('./users/users-router');

const {restricted} = require('./auth/auth-middleware');
server.use(express.json()); // express json kullnacağız => req json olarak objeye dönüşmesini sağladı

server.use('/api/auth', authRouter);
server.use('/api/birds', birdRouter);
server.use('/api/users', userRouter);



server.use('*', (req,res)=> {
    res.status(404).json({message: "not found bird"})
})

module.exports = server;