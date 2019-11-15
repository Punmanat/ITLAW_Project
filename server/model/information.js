const mongoose = require("mongoose");

const informationSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true
    },
    lastname: {
      type: String,
      required: true,
      trim: true
    },
    phone_number:{
      type: String,
      required: true,
      trim: true
    },
    card: {
      type: String,
      required: true,
      trim: true
    },
    backcard: {
      type: String,
      required: true
    }
  }
);
const Information = mongoose.model("Information", informationSchema);

module.exports = Information;
