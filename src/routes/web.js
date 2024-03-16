const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hello World! && nodemon')
})

router.get('/abc', (req, res) => {
    res.send('get abc')
})

router.get('/deptrai', (req, res) => {
    // res.send('bban Phai giau bang moiu gia')
    res.render('sample.ejs')
})

module.exports = router // export default