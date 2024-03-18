const { json } = require('express');
const connection = require('../config/database');


const getHomepage = (req, res) => {

    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send('Check abc')
}

const getHoitoan = (req, res) => {
    // res.send('bban Phai giau bang moiu gia')
    res.render('sample.ejs')
}
module.exports = {
    getHomepage,
    getABC,
    getHoitoan
}