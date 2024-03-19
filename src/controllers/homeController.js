const { json } = require('express');
const connection = require('../config/database');


const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send('Check abc')
    // let users = [];
    // connection.query(
    //     'select * from Users u',
    //     function (err, result, fields) {
    //         users = result;
    //         console.log(">>> Check result: ", result)

    //         console.log(">> check user: ", users);
    //         res.send(JSON.stringify(users));
    //     }
    // );
}

const getHoitoan = (req, res) => {
    // res.send('bban Phai giau bang moiu gia')
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    console.log(">>> req.body: ", req.body);
    res.send('create a new user')
}


module.exports = {
    getHomepage,
    getABC,
    getHoitoan,
    postCreateUser
}