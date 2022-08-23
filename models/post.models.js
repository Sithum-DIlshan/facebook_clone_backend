const mongoose = require('mongoose')
const Body = require('body.models')

const userSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: Body.schema,
        text: String
    },
})

module.exports = mongoose.model('User', userSchema)