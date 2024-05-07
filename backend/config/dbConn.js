const mongoose = require("mongoose");

const dbConnection = () => {
    try {
        mongoose.connect(process.env.DB_URL)
        console.log('Database Connected Successfully!');
    } catch (error) {
        console.log('Database Not Connected!');
        process.exit(1); 
    }
}

module.exports = dbConnection;
