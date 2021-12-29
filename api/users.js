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

router.post('/', (req, res)=>{// create a new user
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }

    if(!newUser.name || !newUser.email){
        res.sendStatus(400)
    }

    users.push(newUser)
    res.json(users)

})
module.exports = router;