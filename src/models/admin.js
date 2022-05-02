const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({

    Name: {type: String,required: true},
    Email: {type: String,required: true,unique: true,
        validate: {
            validator: function (email) {
                return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email);
            },
            message: "Please enter a valid email"
        },
    },
    password: {type: String,required: true, unique: true}

    },{ timestamps: true })

module.exports = mongoose.model('admin', adminSchema)