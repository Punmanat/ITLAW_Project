const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 4000;
const router = require('./router/router')
const ejs = require('ejs')
require('./database/db')

app.use(express.json())
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./templates/views"));
app.use(router)


app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});