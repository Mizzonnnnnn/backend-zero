const { model } = require('mongoose')
const User = require('../models/user')

const getUserAPI = async (req, res) => {
    let results = await User.find({})
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postCreateUserAPI = async (req, res) => {
    let { email, name, city } = req.body

    let user = await User.create({
        email: email,
        name: name,
        city: city
    })
    // res.send("Create Users success")

    return res.status(200).json({
        EC: 0,
        data: user
    })
}


const putUpdateUserAPI = async (req, res) => {
    let { email, name, city } = req.body
    let userId = req.body.userId;

    let user = await User.updateOne({ _id: userId }, { email: email, name: name, city: city });

    return res.status(200).json({
        EC: 0,
        data: user
    })
}

const deleteUserAPI = async (req, res) => {
    let userId = req.body.userId
    let user = await User.deleteOne({ _id: userId });
    return res.status(200).json({
        EC: 0,
        data: user
    })
}
module.exports = {
    getUserAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI
}