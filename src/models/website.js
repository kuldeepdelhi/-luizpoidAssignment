const mongoose = require('mongoose')
const websiteSchema = new mongoose.Schema({

    website: {
        type: String,
        required: true, 
        unique: true
    }

    },{ timestamps: true })

module.exports = mongoose.model('wb', websiteSchema)