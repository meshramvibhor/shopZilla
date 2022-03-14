const mongoose = require('mongoose');


const connectDb = () =>{
    mongoose.connect(process.env.DB_URI).then((data)=>{
        console.log(`Connected to Mongo server : ${data.connection.host}`)
    }).catch((err)=>{
        console.log(err)
    })
}


module.exports = connectDb;