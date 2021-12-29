const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users', require('../api/users'))

app.listen(8080, ()=>{
    console.log('server is running on port 8080')
})