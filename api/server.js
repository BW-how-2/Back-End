const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const restrictedMiddleware = require('../auth/restricted-middleware')
const checkRole = require('../auth/check-role-middleware')

const server = express()

const AuthRouter = require('../auth/auth-router')
const UserRouter = require('../users/users-router')
const HowToRouter = require('../howtos/howTo-router')
const HowToCreatorRouter = require('../howtos/howToCreator-router')

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', AuthRouter)
server.use('/api/auth/users', restrictedMiddleware, UserRouter)
server.use('/api/auth/howto', restrictedMiddleware, HowToRouter)
server.use('/api/auth/howto/creator', restrictedMiddleware, checkRole(2), HowToCreatorRouter)

server.get('/', (req, res) => {
    const message = process.env.MESSAGE
    res.status(200).json({ message })
});

module.exports = server;