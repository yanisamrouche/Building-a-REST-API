const express = require('express')
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

router.put('/:id', (req, res) =>{// update a user
    const foundUser = users.some(user => user.id === parseInt(req.params.id))
    if(foundUser){
        const updateUser = req.body;
        users.forEach(user => {
            if(user.id === parseInt(req.params.id)){
                user.name = updateUser.name ? updateUser.name : user.name;
                user.email = updateUser.email ? updateUser.email : user.email;
                res.json({msg: 'User updated', user})
            }
        })
    }

})
module.exports = router;