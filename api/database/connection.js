const mongoose = require('mongoose')

const url = 'mongodb+srv://HR:HR123@cluster0.fe2oagi.mongodb.net/';


const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB :- ${url}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;