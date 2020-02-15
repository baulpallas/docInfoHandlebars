var router = require("express").Router();
var Campaign = require("../../models/campaign");

router.get("/", async (req, res) => {
  const campaign = await Canmpaign.all();
  res.json({ campaign: campaign });
});

router.post("/campaign/:userid", async (req, res) => {
  const result = await Campaign.create(req.body);
  res.json(result);
});

router.get("/campaign/:userid", async (req, res) => {
  console.log(req.params.userid);
  const info = await Campaign.getById(req.params.userid);
  res.json(info);
});

router.put("/:id", async (req, res) => {
  const result = await Campaign.update(req.params.id, req.body);
  res.json(result);
});

router.delete("/:userid", async (req, res) => {
  const result = await Campaign.delete(req.params.userid);
  res.json(result);
});

module.exports = router;
