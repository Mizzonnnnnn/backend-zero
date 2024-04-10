
const Project = require('../models/project')
const aqp = require('api-query-params')
const Joi = require('joi')
module.exports = {
    createProjectService: async (data) => {
        let { name, startDate, endDate, description, customerInfor, leader } = data;
        customerInfor = {
            name: customerInfor.name,
            phone: customerInfor.phone,
            email: customerInfor.email
        }

        leader = {
            name: leader.name,
            phone: leader.phone
        }
        const schema = Joi.object({
            name: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            startDate: Joi.string(),
            endDate: Joi.string(),
            description: Joi.string(),
            customerInfor: {
                name: Joi.string()
                    .alphanum()
                    .min(3)
                    .max(30)
                    .required(),
                phone: Joi.string().pattern(new RegExp('^[0-9]{8,11}$')),
                email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            },
            leader: {
                name: Joi.string()
                    .alphanum()
                    .min(3)
                    .max(30)
                    .required(),
                email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            }
        })
        const error = schema.validate(data, { abortEarly: false })
        if (error) {
            return error;
        } else {
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

            if (data.type === "ADD-TASK") {
                let myPoject = await Project.findById(data.projectId).exec();
                for (let i = 0; i < data.taskArr.length; i++) {
                    myPoject.tasks.push(data.taskArr[i]);
                }
                let result = await myPoject.save();
                return result;
            }
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