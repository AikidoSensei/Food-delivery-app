const stripe = require('stripe')(process.env.STRIPE_KEY)
const express = require('express')
const app = express();

app.use(express.static('public'))

const YOUR_DOMAIN = 'http://localhost:3000'

const stripePayment = async (req, res) => {
  console.log('someone reached stripe checkout')
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  })

  res.redirect(303, session.url)
}

module.exports ={
  stripePayment
}
