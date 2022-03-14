const app = require('./app');
const dotenv = require('dotenv');

//CONFIGURATION
dotenv.config({path:"backend/config/config.env"});

app.listen(process.env.PORT, ()=>{
    console.log(`Server is Live at http://localhost:${process.env.PORT}`)
})