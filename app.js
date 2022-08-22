const express = require('express')
//
const user = require('./routes/user')
const mongoose = require("mongoose");
// const post = require('./routes/post')

const app = express()
const port = 8000

const url = 'mongodb://localhost/express'

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', ()=>{
    console.log('mongodb connected')
})

app.use(express.json())
app.use('/user', user)
// app.use('/post', post)

app.get('/', (req, res)=>{
    res.send({'message':'default get'})
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
