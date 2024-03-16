const express = require('express');
const { getHomepage, getABC, getHoitoan } = require('../controllers/homeController')
const router = express.Router();


// doan controller
router.get('/', getHomepage)

router.get('/abc', getABC)

router.get('/hoiToan', getHoitoan)

module.exports = router // export default