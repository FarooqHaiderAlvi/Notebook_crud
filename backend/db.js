const mongoose = require('mongoose');
const mongoUri = "mongodb://localhost:27017";


//mongoose.connect returns promise so that's why we are handling this using async await
const connectToMongo =async () => {
    try{
        await mongoose.connect(mongoUri);
        console.log("Connected to mongoDB successfully.")
    }catch(error){
        console.log("error: " ,error)
    }
}

module.exports = connectToMongo;
