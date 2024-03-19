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
    // console.log(">>> req.body: ", req.body)

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    // let {email, name, city} = req.body
    // console.log(">>> email: ", email, ", name: ", name, "city: ", city);
    // res.send('create a new user')



    connection.query(
        // ? truyền mảng mảng
        `INSERT INTO Users(email, name, city) 
        VALUES(?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results); // results contains rows returned by server
            res.send('Create user success')
        }
    );
}


module.exports = {
    getHomepage,
    getABC,
    getHoitoan,
    postCreateUser
}