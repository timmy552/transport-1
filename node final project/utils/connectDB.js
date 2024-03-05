require('dotenv').config()
const mongoose = require('mongoose');
console.log(process.env.DB)
// const dbLink = 'mongodb+srv://Timmy22:Mission2021@cluster0.mk2fyaq.mongodb.net/test'
function connectDB() {
    try{
        console.log("connection to db")
        mongoose.connect((process.env.DB),{
            useNewUrlParser:true,
            useUnifiedTopology:true,})

        // console.log("connection to db")
        //  mongoose.connect('mongodb://127.0.0.1:27017/database')
    
         console.log("connected")
        }
     catch (error) {
          console.log(error)
    }
}

console.log(connectDB())

module.exports = connectDB