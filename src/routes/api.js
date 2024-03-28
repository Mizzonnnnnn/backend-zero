const express = require('express');
const routerAPI = express.Router();
const { getUserAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI } = require('../controllers/apiController')

routerAPI.get('/users', getUserAPI)

routerAPI.post('/users', postCreateUserAPI)

routerAPI.put('/users', putUpdateUserAPI)

routerAPI.delete('/users', deleteUserAPI)



module.exports = routerAPI // export default