const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://liki:likith@cluster0.iyil2p4.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo Successfully");
  });
};

module.exports = connectToMongo;
