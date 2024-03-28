const mongoose = require('mongoose')

// shape data : định dạng hình thù data
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        name: true
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
}, { timestamps: true }
);

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;

