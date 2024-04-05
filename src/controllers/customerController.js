const { uploadSingleFile } = require('../services/fileService');
const { createCustomerService, createArrayCustomerService, getAllCustomerService, putUpdateCustomerService, deleteACustomerService, deleteArrayCustomerService } = require('../services/customerServices');
const Customer = require('../models/customer');


module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body;

        let imageUrl = "";

        if (!req.files || Object.keys(req.files).length === 0) {
            // return res.status(400).send('No files were uploaded.');
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path;
            console.log(">>>> check result: ", result.path);
        }

        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl
        }
        // console.log("check>> ", customerData);
        let customer = await createCustomerService(customerData)

        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },
    postCreateArrayCustomer: async (req, res) => {

        let customers = await createArrayCustomerService(req.body.customers)

        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers
            })
        } else {
            return res.status(200).json({
                EC: -1,
                data: customers
            })
        }

    },

    getAllCustomerApi: async (req, res) => {
        let limit = req.query.limit;
        let page = req.query.page;
        let name = req.query.name;
        let result = null;

        if (limit && page) {
            result = await getAllCustomerService(limit, page, name, req.query);
        } else {
            result = await getAllCustomerService();
        }
        return res.status(200).json({
            EC: 0,
            data: result
        })

    },

    putUpdateCustomerApi: async (req, res) => {
        let result = await putUpdateCustomerService(req);

        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    deleteACustomer: async (req, res) => {
        let id = req.body.id;
        let result = await deleteACustomerService(id);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    customersmany: async (req, res) => {
        let ids = req.body.customersId;
        console.log(">>> check ids: ", ids)
        let result = await deleteArrayCustomerService(ids);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

}