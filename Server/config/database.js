const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL.replace('localhost', '127.0.0.1'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB connected Successfully");
    } catch (error) {
        console.error("Error: connection issue", error);
        process.exit(1);
    }
};

module.exports = connectWithDb;
