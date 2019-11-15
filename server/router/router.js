const express = require("express");
const router = express.Router();
const Information = require("../model/information");

router.get("/", async (req, res) => {
  const information = await Information.find({});
  res.render("index");
});
router.get("/data", async (req, res) => {
  const information = await Information.find({});
  res.send(information);
});


router.post("/webhook", async (req, res) => {
  console.log("POST: /");
  const {
    firstname,
    lastname,
    phone_number,
    card,
    back
  } = req.body.queryResult.outputContexts[0].parameters;
  const information = new Information({
    firstname,
    lastname,
    phone_number,
    card,
    backcard: back
  });

  await information.save();
});

router.delete('/delete/:id', async(req, res) => {
  try{
      const info = await Information.findByIdAndDelete(req.params.id)
      res.send(info)
  }
  catch(e){
      if(e.name === 'CastError') return res.status(404).send('ID not found.')
      res.status(500).send(e)
  }
})

module.exports = router;
