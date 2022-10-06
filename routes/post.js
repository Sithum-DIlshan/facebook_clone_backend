const express = require('express')
const app = express();
const router = express.Router()

const Post = require('../models/post.models')
const {json} = require("express");

app.use(express, json())

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (err) { 

    }
})

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.send(post)
    } catch (err) {

    }
})

router.post('/', async (req, res) => {
    try {
        const post = new Post({
            user_id: req.body.user_id,
            date: req.body.date,
            time: req.body.time,
            title: req.body.title,
            body: req.body.body
        })
        const response = await post.save();
        res.json(response);
    } catch (err) {

    }
})

router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        post.user_id = req.body.user_id
        post.date = req.body.date
        post.time = req.body.time
        post.title = req.body.title
        post.body = req.body.body

        const response = await post.save();
        res.json(response);
    } catch (err) {

    }
})

router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        const response = post.remove()
        res.json(response)
    } catch (err) {
        res.send({'message': 'No such a user'})
    }
})

module.exports = router
