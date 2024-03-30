const express = require('express');
const routerAPI = express.Router();
const { getUserAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileApi, postUploadMultipleFilesAPI } = require('../controllers/apiController')
const { postCreateCustomer, postCreateArrayCustomer } = require('../controllers/customerController')


routerAPI.get('/users', getUserAPI)
routerAPI.post('/users', postCreateUserAPI)
routerAPI.put('/users', putUpdateUserAPI)
routerAPI.delete('/users', deleteUserAPI)

routerAPI.post('/file', postUploadSingleFileApi)
routerAPI.post('/files', postUploadMultipleFilesAPI)

routerAPI.post('/customers', postCreateCustomer)
routerAPI.post('/customers-many', postCreateArrayCustomer)
module.exports = routerAPI // export default