const { response } = require("express");
const express = require("express");

const app = express();

app.get("/projects", (req, res) => {
  return res.json(["projeto1", "projeto2"]);
});

app.post("/projects", (req, res) => {
  return res.json(["projeto1", "projeto2", "projeto3"]);
});

app.put("/projects/:id", (req, res) => {
  return res.json(["projeto4", "projeto2", "projeto3"]);
});

app.delete("/projects/:id", (req, res) => {
  return res.json(["projeto2", "projeto3"]);
});

app.listen(3333, () => {
  console.log("🚀");
});
