const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const textRouter = require('./routes/texts')
app.use('/texts', textRouter)

app.listen(8000, () => {
    console.log('Server started')
})