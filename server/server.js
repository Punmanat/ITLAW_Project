const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
const router = require("./router/router");
const ejs = require("ejs");
const cors = require("cors");
require("./database/db");

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./templates/views"));
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
