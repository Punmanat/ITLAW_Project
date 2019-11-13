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
const Task = mongoose.model("Information", informationSchema);

module.exports = Task;
