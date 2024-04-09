const { model } = require('mongoose')
const Task = require('../models/task');
const { removeAllListeners } = require('nodemon');
const aqp = require('api-query-params')

const CreateTask = async (data) => {
    if ("EMPTY-TASK") {
        let result = await Task.create(data);
        return result;
    }


    return null;
}

const getTask = async (queryString) => {
    const page = queryString.page;

    const { filter, limit, population } = aqp(queryString);

    let offset = (page - 1) * limit;
    delete filter.page;
    // console.log(">>> check filter: ", filter);

    result = await Task.find(filter).populate(population).skip(offset).limit(limit).exec();

    return result;
}

const deleteTask = async (data) => {
    let result = Task.deleteOne({ data });
    return result;
}
const updateTask = async (data) => {
    let result = await Task.updateOne({ _id: data.id }, { ...data });
    return result;
}
module.exports = {
    CreateTask,
    getTask,
    deleteTask,
    updateTask
}