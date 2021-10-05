const express = require('express')
const router = express.Router()

const { authenticator } = require('../middleware/auth')

const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')

router.use('/users', users)
router.use('/todos',authenticator,todos)
router.use('/', authenticator, home)

module.exports = router