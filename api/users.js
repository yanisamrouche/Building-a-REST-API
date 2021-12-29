const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()
const uuid = require('uuid')
const users = require('./usersData')

router.get('/', (req, res) =>{// get all the users
    res.json(users)
})

router.get('/:id', (req, res)=>{// get a specific user by id
    const userWithId = users.filter(user => user.id === parseInt(req.params.id))
    if(userWithId){
        res.json(userWithId)
    }else{
        res.sendStatus(400)
    }
})
module.exports = router;