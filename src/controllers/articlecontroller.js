const articlesModel = require("../models/article")
const adminModel = require('../models/admin')
const mongoose = require('mongoose')

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}

const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}
const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}

const registerarticle = async function (req, res) {
    try {
        const requestBody = req.body;
        if (!isValidRequestBody(requestBody)) {
            return res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide intern details' })
        }
          
        let { Title, Description, WebsiteId } = requestBody
        

        let savedTitle = await articlesModel.create(requestBody)
        res.status(201).send({ status: true, data: savedTitle })
    


    } catch (e) {
        res.status(500).send(e.message);
    }
}

module.exports = { registerarticle }