const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 25,
  },
  email: {
    type: String,
    unique: true,
    maxlength: 40,
  },
  password: {
    type: String,
    unique: true,
    maxlength: 8,
    minlength: 4,
  },
});

const dataModel = mongoose.model("data", dataSchema);
module.exports = dataModel;
