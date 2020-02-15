const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const Info = require("./models/info");
const Campaign = require("./models/campaign");

var app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

const PORT = 8002;

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));
app.use(require("./routes"));

app.engine("handlebars", exphbs());

app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  res.render("basicinfo");
});

app.get("/basicinfo", async (req, res) => {
  const info = await Info.all();
  res.render("basicinfo", { info });
});

app.get("/basicinfo/:userid", async (req, res) => {
  const info = await Info.getById(req.params.userid);
  res.render("basicinfo", { info });
});

app.post("/basicinfo", async (req, res) => {
  console.log(req.params);
  const info = await Info.create(req.body);
  res.render("basicinfo", { info: info });
});

app.delete("/basicinfo/:userid", async (req, res) => {
  const info = await Info.delete(req.params.userid);
  res.render("basicinfo", { info });
});

app.get("/campaign/:userid", async (req, res) => {
  const campaign = await Campaign.getById(req.params.userid);
  res.render("campaign", { campaign });
});

app.post("/campaign/:userid", async (req, res) => {
  console.log(req.params);
  const campaign = await Campaign.create(req.params.userid);
  res.render("campaign", { campaign: campaign });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running on ${process.env.PORT || PORT}`);
});
