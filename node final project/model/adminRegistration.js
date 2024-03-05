const mongoose = require('mongoose')
const {Schema} = mongoose

const admin = new Schema({
    username: {
        type:String,
        require: true,
        minLength: [10, "username must be above 10"],
        unique: true,
        trim: true
    },
    password: {
        type:String,
        require: true,
        minLength: [7, "password must be above 7"],
        trim: true
       
    },
    fullname: {
        type:String,
        require: true,
        minLength: [7, 'fullname must be above 7'],
        trim: true
    },
    State: {
        type:String,
        require: true,
        trim: true
    },
    passport: {
        type:String,
        require: true,
        minLength: [10, 'passport must be above 10'],
        trim: true
    },
    phone: {
        type:String,
        require: true,
        minLength: [7, 'passport must be above 7'],
        trim: true
    },
    role: {
        type:String,
        require: true
    },
    active: {
        type: Boolean,
        require: true
    }
})

module.exports = mongoose.model("adminRegistration", admin)