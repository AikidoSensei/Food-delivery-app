const { getAll, getCategory, getRating, getPrice, getOne } = require('../controllers/controllers')

const express = require('express')

const routes = express.Router()

routes.route('/').get(getAll)
routes.route('/food-detail/:id').get(getOne)
routes.route('/category/:category').get(getCategory)
routes.route('/rating/:rating').get(getRating)
routes.route('/price/:price').get(getPrice)


module.exports = routes
