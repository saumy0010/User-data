const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
const User = require('./User')

mongoose.connect('mongodb+srv://bahubali:test123@cluster0.p5eb8.mongodb.net/mongo?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to MongoDB.......');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


/
app.post('/', (req, res) => {

    const createUser = async() => {
        try {
            const user = new User(req.body)
            const result = await user.save()
            console.log(result)
            res.send(result)

        } catch (err) {
            console.log(err.message)
        }
    }

    createUser()

})

app.get('/fetch', (req, res) => {
    User.find({})
        .then(result => {
            result.forEach(user => {
                console.log(user.name)
            })
            res.send(result)
        }).catch(err => {
            console.log(err.message)
        })
})

app.listen(port, () => {
    console.log(`Click on this url http://localhost:${port}`)
})