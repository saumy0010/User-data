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
        const user = new User({ name: req.body.name, age: req.body.age })
        const result = await user.save()
        console.log(result)
        res.send(result)

        // res.send(req.body)
    }

    createUser()

})

app.listen(port, () => {
    console.log(`Click on this url http://localhost:${port}`)
})