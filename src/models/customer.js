const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete');
// shape data : định dạng hình thù data
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
}, { timestamps: true }
);

// Override all methods
customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;

