const express = require('express')
const app = express();
const router = express.Router()

const User = require('../models/user.models')
const {json} = require("express");

app.use(express, json())

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (err) {

    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.send(user)
    } catch (err) {

    }
})

router.post('/', async (req, res) => {
    try {
        const user = new User({
            first_name: req.body.first_name,
            sur_name: req.body.sur_name,
            gender: req.body.gender,
            date_of_birth: req.body.date_of_birth,
            password: req.body.password,
            phone_number: req.body.phone_number,
            email: req.body.email
        })
        const response = await user.save();
        res.json(response);
    } catch (err) {

    }
})

router.put('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        user.first_name = req.body.first_name
        user.sur_name = req.body.sur_name
        user.gender = req.body.gender
        user.date_of_birth = req.body.date_of_birth
        user.password = req.body.password
        user.phone_number = req.body.phone_number
        user.email = req.body.email

        const response = await user.save();
        res.json(response);
    } catch (err) {

    }
})

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const response = user.remove()
        res.json(response)
    } catch (err) {
        res.send({'message': 'No such a user'})
    }
})

module.exports = router
