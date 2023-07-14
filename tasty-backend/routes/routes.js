
const { getAll, getCategory, getRating, getPrice, getOne, getQuery, getHotDeals } = require('../controllers/controllers')

const express = require('express')

const routes = express.Router()

routes.route('/').get(getAll)
routes.route('/food-detail/:id').get(getOne)
routes.route('/category/:category').get(getCategory)
routes.route('/rating/:rating').get(getRating)
routes.route('/price/:price').get(getPrice)
routes.route('/hot-deals').get(getHotDeals)
routes.route('/find').get(getQuery)

module.exports = routes
