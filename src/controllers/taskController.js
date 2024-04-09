const { CreateTask, getTask, deleteTask, updateTask } = require('../services/taskServices')

module.exports = {
    postCreateTask: async (req, res) => {
        let task = await CreateTask(req.body);
        return res.status(200).json({
            EC: 0,
            data: task
        })
    },
    getAllTask: async (req, res) => {
        let result = await getTask(req.query);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    deleteATask: async (req, res) => {
        let result = await deleteTask(req.body.id);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    updateATask: async (req, res) => {
        let result = await updateTask(req.body);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
}