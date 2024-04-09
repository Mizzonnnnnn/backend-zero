
const Project = require('../models/project')
const aqp = require('api-query-params')
module.exports = {
    createProjectService: async (data) => {

        if (data.type === "EMPTY-PROJECT") {
            let result = await Project.create(data);
            return result
        }

        if (data.type === "ADD-USER") {
            console.log(">>> check data: ", data)
            let myProject = await Project.findById(data.projectId).exec();
            for (let i = 0; i < data.userArr.length; i++) {
                myProject.usersInfor.push(data.userArr[i]);
            }

            let result = await myProject.save();

            console.log(">>> check data: ", myProject)
            return result
        }

        if (data.type === "REMOVE-USER") {
            console.log(">>> check data: ", data)
            let result = await Project.findById(data.projectId).exec()
            // console.log(">>> check result: ", result)
            for (let i = 0; i < data.userArr.length; i++) {
                result.usersInfor.pull(data.userArr[i]);
            }

            let a = await result.save();
            return a;

        }
        return null
    },

    getProject: async (queryString) => {
        const page = queryString.page;



        const { filter, limit, population } = aqp(queryString);

        let offset = (page - 1) * limit;
        delete filter.page;

        result = await Project.find(filter).populate(population).skip(offset).limit(limit).exec();

        return result;
    },

    deleteAProject: async (ids) => {
        // let result = await Project.deleteOne({ id: ids }); xóa khỏi database 
        let result = await Project.delete({ id: ids });
        return result
    },

    updateProject: async (data) => {
        let { sid, name, endDate, description } = data;
        try {
            let result = await Project.updateOne({ _id: sid }, { name: name, endDate: endDate, description: description });
            return result;
        } catch (error) {
            console.log(">> check error: ", error)
            return null;
        }


    }
}