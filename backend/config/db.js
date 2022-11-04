const mongoose = require("mongoose"); // this get imported from "package.json" file, in the root folder
const colors = require("colors"); // this is just have colour in your terminal

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, { // this will be responsible to connect ot the DB. This is the connection string (Key pass/URI), which is stored in the ".env" file, in the root folder
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.green);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;