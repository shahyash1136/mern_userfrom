const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']
    },
    gender: {
        type: String,
        required: [true, 'Please select gender']
    }
});

const Data = mongoose.model('Data', formSchema);
module.exports = Data;