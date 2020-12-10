const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/register', (req, res) => {
    const {username, password} = req.body
    if (username == null || password == null ) {
        res.send({message: "You have a big problem right now!"})
        return 
    }
    
    const reverseUsername = username.split('').reverse().join('')
    const reversePassword = password.split('').reverse().join('')
    res.send({ reverseUsername, reversePassword })
})

app.listen(3000)




