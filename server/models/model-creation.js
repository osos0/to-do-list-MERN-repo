const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  car: {
    type: String,
  },
  color: {
    type: String,
  },
  price: {
    type: String,
  },
});

const dbModel = mongoose.model("objeects", userSchema);

module.exports = dbModel;
