require('dotenv').config();
const express = require('express')
const cors = require('cors');
const tasks = require('./routes/routes');
const cookieSession = require('cookie-session');
const passport = require('passport');
const PORT = process.env.PORT || 5000;
const passportEngine =  require('./auth/passport')
const authClient = require('./routes/auth')
const classicAuth = require('./routes/routeAuth')
const app = express();

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
app.listen(PORT, ()=>{
 console.log(`Server running at ${PORT}...`); 
})
