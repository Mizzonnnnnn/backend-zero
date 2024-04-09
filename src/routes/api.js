const express = require('express');
const routerAPI = express.Router();
const { getUserAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileApi, postUploadMultipleFilesAPI } = require('../controllers/apiController')
const { postCreateCustomer, postCreateArrayCustomer, getAllCustomerApi, putUpdateCustomerApi, deleteACustomer, customersmany } = require('../controllers/customerController')
const { postCreateProject, getAllProject, deleteAProject, updateAProject } = require('../controllers/projectController')
const { postCreateTask, getAllTask, deleteATask, updateATask } = require('../controllers/taskController')
routerAPI.get('/users', getUserAPI)
routerAPI.post('/users', postCreateUserAPI)
routerAPI.put('/users', putUpdateUserAPI)
routerAPI.delete('/users', deleteUserAPI)

routerAPI.post('/file', postUploadSingleFileApi)
routerAPI.post('/files', postUploadMultipleFilesAPI)

routerAPI.post('/customers', postCreateCustomer)
routerAPI.post('/customers-many', postCreateArrayCustomer)
routerAPI.get('/customers', getAllCustomerApi)
routerAPI.put('/customers-update', putUpdateCustomerApi)
routerAPI.delete('/customers', deleteACustomer)
routerAPI.delete('/customers-many', customersmany)

routerAPI.post('/projects', postCreateProject)
routerAPI.get('/projects', getAllProject)
routerAPI.delete('/projects', deleteAProject)
routerAPI.put('/projects', updateAProject)

routerAPI.post('/tasks', postCreateTask)
routerAPI.get('/tasks', getAllTask)
routerAPI.delete('/tasks', deleteATask)
routerAPI.put('/tasks', updateATask)


routerAPI.get('/info', (req, res) => {
    console.log(">>> check: ", req.query)
    return res.status(200).json({
        data: req.query
    })
})

routerAPI.get('/info/:name/:address/:email', (req, res) => {
    console.log(">>> check: ", req.params)
    return res.status(200).json({
        data: req.params
    })
})


module.exports = routerAPI // export default