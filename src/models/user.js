const mongoose = require('mongoose')

// shape data : định dạng hình thù data
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;

