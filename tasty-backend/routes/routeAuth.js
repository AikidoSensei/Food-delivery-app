const express = require('express')
const {register, login} = require('../auth/classicAuth')
const routes = express.Router()

routes.route('/register').post(register)

routes.route('/login').get(login)

module.exports = routes