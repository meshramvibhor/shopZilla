const app = require('./app');
const dotenv = require('dotenv');
const connectDb = require('./config/database')

//CONFIGURATION
dotenv.config({path:"backend/config/config.env"});

//connecting db
connectDb();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is Live at http://localhost:${process.env.PORT}`)
})