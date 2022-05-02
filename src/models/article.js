const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true, 
        unique: true
    },
    description: {
        type: String,
        required: true, 
        unique: true
    },
    WebsiteId : {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },

    },{ timestamps: true })

module.exports = mongoose.model('article', articleSchema)