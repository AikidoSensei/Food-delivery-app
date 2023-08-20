const express = require('express')
const { stripePayment } = require('./stripe')
const routes = express.Router()

routes.route('/create-checkout-session').post( (req, res) => {
  console.log('someone reached stripe checkout')
  res.json({ url: 'Hi' })
})

module.exports = routes
