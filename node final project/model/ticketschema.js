const mongoose = require('mongoose')
const {Schema} = mongoose

const user = new Schema({
    fullname: {
        type:String,
        require: true,
        minLength: [10, "username must be above 10"],
        // unique: true,
        trim: true
    },
    origin: {
        type:String,
        require: true,
        trim: true
       
    },
    destination: {
        type:String,
        require: true,
        trim: true
    },
    depart: {
        type:String,
        require: true,
        trim: true
    },
    sit: {
        type:String,
        require: true,
       trim: true
    },
    phonenumber: {
        type: Number,
        require: true,
        minLength: [5, 'passport must be above 7'],
        trim: true,
        // unique: true
    },
    price: {
        type: String,
        require: true,
        trim: true,
       
    },
    ticketnumber: {
        type: String,
        require: true,
            trim: true,
        unique: true
    },
    total: {
        type: String,
        require: true,
            trim: true,
    },
    role: {
        type:String,
        require: true
    },
   
})

module.exports = mongoose.model("ticket", user)