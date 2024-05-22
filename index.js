//  express setup
const express = require('express')
const app = express()


require('dotenv').config()
require('./db/db.js')
app.use(express.json());

const port = process.env.port || 5000

// Route Handling

app.use('/api/team', require('./routes/team.route.js'))

app.listen(port, ()=>
{
    console.log(`Server creation successfull, Running on ${port}`)
})