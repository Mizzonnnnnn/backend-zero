const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String
});

const projectInfo = new mongoose.Schema({
    name: String,
    startDate: String,
    endDate: String,
    description: String,
});
// shape data
const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: String,
        usersInfo: userSchema,
        projectInfo: projectInfo,
        status: String,
        startDate: String,
        endDate: String
    },
    {
        timestamps: true
    })


// override all method
taskSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Task = mongoose.model('task', taskSchema)

module.exports = Task;