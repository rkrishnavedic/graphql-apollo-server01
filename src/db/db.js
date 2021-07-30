require('dotenv').config()

const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL;

const connectDB = ()=>{
    return mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology:true}, err=>{
        if(err){
            console.log(
                'Failed to connect DB!'
            )
        }else{
            console.log('Connected to DB!')
        }
    })

}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongo Connection Error"));

module.exports = connectDB;
