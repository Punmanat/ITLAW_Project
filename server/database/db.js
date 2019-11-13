const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://satawatnack:0869099404@data-t4oes.gcp.mongodb.net/dialogflow?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).catch((e)=>{{
  console.log("Cannot connect db")
}})