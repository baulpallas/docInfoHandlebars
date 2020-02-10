var router = require("express").Router();
var Info = require("../../models/info");

router.get("/", async (req, res) => {
  const info = await Info.all();
  res.json({ info: info });
});

router.post("/", async (req, res) => {
  const result = await Info.create(req.body);
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const todo = await Info.getById(req.params.id);
  res.json(todo);
});

router.put("/:id", async (req, res) => {
  const result = await Info.update(req.params.id, req.body);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const result = await Info.delete(req.params.id);
  res.json(result);
});

router.get("/:id/todos", async (req, res) => {
  const result = await Info.todos(req.params.id);
  res.json(result);
});

router.post("/:id/todos", async (req, res) => {
  const result = await Info.addTodo(req.params.id, req.body);
  res.json(result);
});

module.exports = router;
