const { createProjectService, getProject, deleteAProject, updateProject } = require('../services/projectServices')

module.exports = {
    postCreateProject: async (req, res) => {
        // console.log("check>> ", porjectData);

        let project = await createProjectService(req.body);
        return res.status(200).json({
            EC: 0,
            data: project
        })
    },

    getAllProject: async (req, res) => {
        let result = await getProject(req.query)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    deleteAProject: async (req, res) => {
        let result = await deleteAProject(req.body.projectId);
        return res.status(200).json({
            EC: 0,
            data: result
        })

    },

    updateAProject: async (req, res) => {
        let result = await updateProject(req.body);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
}