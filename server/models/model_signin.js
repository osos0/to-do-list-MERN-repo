const mongoose = require("mongoose");

const signUserModel = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const signModel = mongoose.model("objtests", signUserModel);
module.exports = signModel;
