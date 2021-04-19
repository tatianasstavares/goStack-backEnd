const { response } = require("express");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/projects", (req, res) => {
  const query = req.query;

  console.log(query);

  return res.json(["projeto 1", "Projeto 2"]);
});

app.post("/projects", (req, res) => {
  const { title, owner } = req.body;
  console.log(title, owner);
  return res.json(["p1,p2,p3"]);
});

app.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  return res.json(["projeto4", "projeto2", "projeto3"]);
});

app.delete("/projects/:id", (req, res) => {
  return res.json(["projeto2", "projeto3"]);
});

app.listen(3333, () => {
  console.log("🚀");
});
