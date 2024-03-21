const { json } = require('express');
const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDServices');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
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

    let [results, , fields] = await connection.query(
        `INSERT INTO Users(email, name, city) 
        VALUES(?, ?, ?)`,
        [email, name, city]
    );
    res.send("Create Users success")
}


const getCreatePage = (req, res) => {
    res.render('create.ejs')
}
module.exports = {
    getHomepage,
    getABC,
    getHoitoan,
    postCreateUser,
    getCreatePage
}