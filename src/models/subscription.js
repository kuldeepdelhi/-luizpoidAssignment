const mongoose = require('mongoose')
const subscriptionSchema = new mongoose.Schema({

    Email: {type: String,required: true,unique: true,
        validate: {
            validator: function (email) {
                return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email);
            },
            message: "Please enter a valid email"
        }
    }
    },{ timestamps: true })

module.exports = mongoose.model('subscription', subscriptionSchema)