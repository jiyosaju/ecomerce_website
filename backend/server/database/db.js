const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://User:123456789123456789@cluster0.ooz2vmj.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

module.exports = connectDB;

