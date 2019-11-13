const express = require("express");
const router = express.Router();
const Information = require("../model/information");

router.get("/", async (req, res) => {
  const information = await Information.find({});
  res.render("index", { information });
});

router.post("/webhook", async (req, res) => {
  console.log("POST: /");
  const {
    firstname,
    lastname,
    card,
    back
  } = req.body.queryResult.outputContexts[0].parameters;
  const information = new Information({
    firstname,
    lastname,
    card,
    backcard: back
  });

  await information.save();
});

module.exports = router;
