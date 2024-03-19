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

const postCreateUser = async (req, res) => {
    // console.log(">>> req.body: ", req.body)

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    // let {email, name, city} = req.body
    // console.log(">>> email: ", email, ", name: ", name, "city: ", city);


    let [results, , fields] = await connection.query(
        // ? truyền mảng mảng
        `INSERT INTO Users(email, name, city) 
        VALUES(?, ?, ?)`,
        [email, name, city],
    );

    console.log(">>> check results: ", results)

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