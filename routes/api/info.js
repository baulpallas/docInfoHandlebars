var router = require("express").Router();
var Info = require("../../models/info");

router.get("/", async (req, res) => {
  const info = await Info.all();
  res.json({ info: info });
});

router.post("/basicinfo", async (req, res) => {
  const result = await Info.create(req.body);
  res.json(result);
});

router.get("/basicinfo/:userid", async (req, res) => {
  console.log(req.params.userid);
  const info = await Info.getById(req.params.userid);
  res.json(info);
});

router.put("/:id", async (req, res) => {
  const result = await Info.update(req.params.id, req.body);
  res.json(result);
});

router.delete("/:userid", async (req, res) => {
  const result = await Info.delete(req.params.userid);
  res.json(result);
});

module.exports = router;
