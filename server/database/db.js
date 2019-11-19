const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://satawatnack:1234567890@cluster0-xpbvt.gcp.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).catch((e)=>{{
  console.log("Cannot connect db")
}})