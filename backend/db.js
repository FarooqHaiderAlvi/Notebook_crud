const mongoose = require('mongoose');
const mongoUri = "mongodb://localhost:27017";

const connectToMongo = () => {
    mongoose.connect(mongoUri)
        .then(() => {
            console.log("Connected to MongoDB successfully");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
}

module.exports = connectToMongo;
