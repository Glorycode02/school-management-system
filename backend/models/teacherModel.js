const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    },
    phonenumber: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    // profile: {
    //     type: String,
    //     required: true
    // },
    hireDate: {
        type: Date,
        default: Date.now
    },
},{timestamps: true});

module.exports = mongoose.model("Teacher", teacherSchema);
