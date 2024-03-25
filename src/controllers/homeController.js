const { json } = require('express');
const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDServices');
const User = require('../models/user')
const getHomepage = async (req, res) => {
    let results = await User.find({})
    return res.render('home.ejs', { listusers: results })
}

const getABC = (req, res) => {
    res.send('Check abc')
}

const getHoitoan = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body

    await User.create({
        email: email,
        name: name,
        city: city
    })
    // await User.create({
    //     email,
    //     name,
    //     city
    // })

    res.send("Create Users success")
}

const postUpdateUser = async (req, res) => {
    let { email, name, city } = req.body
    let userId = req.body.userId;

    await User.updateOne({ _id: userId }, { email: email, name: name, city: city });
    res.redirect('/')
}
const postDeleteUser = async (req, res) => {
    const userId = req.params.id;

    let user = await getUserById(userId);
    res.render('delete.ejs', { userEdit: user })
}
const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    // let user = await getUserById(userId);
    let user = await User.findById(userId).exec();
    res.render('edit.ejs', { userEdit: user })
}

const postHandleRemoveUser = async (req, res) => {
    let userId = req.body.userId
    await deleteUserById(userId)
    res.redirect('/')
}

module.exports = {
    getHomepage,
    getABC,
    getHoitoan,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser,
    deleteUserById
}