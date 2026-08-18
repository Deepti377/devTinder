const mongoose = require("mongoose");

// Connection URL
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://pdeepti2311_db_user:oWFBcvEZI70Vound@deeptinodejs.ixfhcak.mongodb.net/deeptiNodeJs"
  );
};

// connectDB()
//   .then(() => {
//     console.log("Database connection established...");
//   })
//   .catch(() => {
//     console.error("Database connection established...");
//   });
module.exports = connectDB;
