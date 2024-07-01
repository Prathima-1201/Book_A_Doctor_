// backend/config/connectToDB.js


const mongoose = require('mongoose');
require('dotenv').config();

const connectToDB = () => {
  mongoose
    .connect('mongodb://localhost:27017/doctor', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      throw new Error(`Could not connect to MongoDB: ${err}`);
    });
};

module.exports = connectToDB;
