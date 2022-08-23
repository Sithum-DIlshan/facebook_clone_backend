const mongoose = require('mongoose')

const bodySchema =new mongoose.Schema({
    image_url:{
        type: String
    },
    text: {
        type: String
    }
})

module.exports=mongoose.model('Body', bodySchema)