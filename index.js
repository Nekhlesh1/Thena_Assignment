const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.port || 5000

app.use('/', (req,res)=>
{
    res.send('Working')
})

app.listen(port, ()=>
{
    console.log(`Server creation successfull, Running on ${port}`)
})