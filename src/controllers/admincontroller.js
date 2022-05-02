const adminModel = require("../models/admin")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")


const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}

const registerAdmin = async function (req, res) {
    try {
        const requestBody = req.body

        let { name, email, password } = requestBody; 

    
        const EP = await bcrypt.hash(password, 10)
        const adminData = { name, email, password: EP}

        let savedAdmin = await adminModel.create(adminData)
        console.log(adminData)
        res.status(201).send({ status: true, data: savedAdmin })
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}

// login
const loginAdmin = async function (req, res) {
    try {
        const requestBody = req.body

        if (!isValidRequestBody(requestBody)) {
            return res.status(400).send({ status: false, message: 'value in request body is required' })
        }

        let email = req.body.email
        let password = req.body.password

            let User = await adminModel.findOne({ email: email })

            if (!User) {
                return res.status(400).send({ status: false, msg: "email does not exist" })
            }

            let dpasss = await bcrypt.compare(password, User.password);
            if (dpasss) {
                const token = await jwt.sign({ userId: User._id }, 'kuldeep', {
                    expiresIn: "3h"
                })
                res.header('x-api-key', token);

            res.status(200).send({ status: true, msg: "User login successfull", data: { userId: User._id, Token: token } })
        } else {
            res.status(400).send({ status: false, Msg: "Invalid password write correct password" })
        }
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}



module.exports = { registerAdmin, loginAdmin }