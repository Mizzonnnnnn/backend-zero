const express = require('express');
const { getHomepage, getABC, getHoitoan, postCreateUser } = require('../controllers/homeController')
const router = express.Router();


// doan controller
router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/hoiToan', getHoitoan)

router.post('/create-user', postCreateUser);

module.exports = router // export default