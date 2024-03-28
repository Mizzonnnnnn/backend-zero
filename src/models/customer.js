const mongoose = require('mongoose')

// shape data : định dạng hình thù data
const customerSchema = new mongoose.Schema({
    name: {
        String
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String
});

const Customexr = mongoose.model('customer', userSchema);

module.exports = Customexr;

