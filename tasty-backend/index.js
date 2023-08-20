require('dotenv').config();
const express = require('express')
const cors = require('cors');
const tasks = require('./routes/routes');
const stripePay = require('./stripe/stripeRoute');
const cookieSession = require('cookie-session');
const passport = require('passport');
const PORT = process.env.PORT || 5000;
const passportEngine =  require('./auth/passport')
const authClient = require('./routes/auth')
const classicAuth = require('./routes/routeAuth')

const stripe = require('stripe')(
  'sk_test_51NhBnwEzOZ85pe2YxzUMOTzYKzdLSuvvqP7axhwDEbpfXuKv0FtToDaBZtVXeLYLT4P7bRfjynRYQa3sJj8c2Ukb00fYJ88WjQ'
)

const app = express()

app.use(express.static('public'))

const YOUR_DOMAIN = 'http://localhost:5000'
app.use(cookieSession({
 name:'session',
 keys:['tasty'],
 maxAge: 24 * 60 * 60 * 100
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use(cors({
 origin: 'http://localhost:3000',
 methods: 'GET, POST',
 credentials: true,
}))
// app.use(cors())

app.use('/auth', authClient)
app.use('/getdata', tasks)
app.use('/auth/classic', classicAuth)
app.use('/', stripePay)


app.listen(PORT, ()=>{
 console.log(`Server running at ${PORT}...`); 
})
