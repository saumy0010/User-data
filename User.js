const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 18,
        max: 100,
    }
});

module.exports = mongoose.model('User', userSchema);