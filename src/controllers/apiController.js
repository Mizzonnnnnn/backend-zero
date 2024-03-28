const { model } = require('mongoose')
const User = require('../models/user')
const { uploadSingleFile, uploadMultipleFiles } = require('../services/fileService')
const getUserAPI = async (req, res) => {
    let results = await User.find({})
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postCreateUserAPI = async (req, res) => {
    let { email, name, city } = req.body

    let user = await User.create({
        email: email,
        name: name,
        city: city
    })
    // res.send("Create Users success")

    return res.status(200).json({
        EC: 0,
        data: user
    })
}


const putUpdateUserAPI = async (req, res) => {
    let { email, name, city } = req.body
    let userId = req.body.userId;

    let user = await User.updateOne({ _id: userId }, { email: email, name: name, city: city });

    return res.status(200).json({
        EC: 0,
        data: user
    })
}

const deleteUserAPI = async (req, res) => {
    let userId = req.body.userId
    let user = await User.deleteOne({ _id: userId });
    return res.status(200).json({
        EC: 0,
        data: user
    })
}

const postUploadSingleFileApi = async (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let result = await uploadSingleFile(req.files.image);

    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const postUploadMultipleFilesAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    // console.log(req.files);
    //upload single => files is an object
    //upload multiple => files is an array
    if (Array.isArray(req.files.image)) {
        //upload multiple
        let result = await uploadMultipleFiles(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: result
        })

    } else {
        //upload single
        return await postUploadSingleFileApi(req, res);
    }
}

module.exports = {
    getUserAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileApi,
    postUploadMultipleFilesAPI
}