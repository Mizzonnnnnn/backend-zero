const express = require('express');
const { getHomepage, getABC, getHoitoan, postCreateUser, getCreatePage, getUpdatePage } = require('../controllers/homeController')
const router = express.Router();


// doan controller
router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/hoiToan', getHoitoan)

router.get('/create', getCreatePage)
router.get('/update', getUpdatePage)

router.post('/create-user', postCreateUser);



module.exports = router // export default