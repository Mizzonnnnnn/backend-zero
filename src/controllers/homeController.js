
const getHomepage = (req, res) => {
    res.send('Hello World! && nodemon')
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