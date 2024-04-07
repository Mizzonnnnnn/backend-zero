const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete');

// lý do ko tái sử dungj customerr vì ????, mốt có query dự án ta có luôn thôg tin khách hàng, ko định nghĩa full, khi ta ambed ta chỉ cần nhúng những trườnh quan trọng
const customerSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});


const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        startDate: String,
        endDate: String,
        description: String,
        customerInfor: customerSchema,
        usersInfor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        leader: userSchema,
        tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
    },
    {
        timestamps: true,
    }
)

// override all method
projectSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Task = mongoose.model('Project', taskSchema)

module.exports = projectSchema;