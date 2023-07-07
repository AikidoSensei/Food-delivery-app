const express = require('express')
require('dotenv')
const cors = require('cors')
const tasks = require('./routes/routes')
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json())
app.use(cors())
app.use('/getdata', tasks)
app.listen(PORT, ()=>{
 console.log(`Server running at ${PORT}...`); 
})
