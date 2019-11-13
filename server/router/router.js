const express = require("express");
const router = express.Router();
const Information = require("../model/information")

router.get("/", (req, res) => {
  res.render('index')
});

router.post("/webhook", (req, res) => {
  console.log("POST: /");
  console.log("Body: ", req.body.queryResult.outputContexts[0].parameters);
});

module.exports = router;
