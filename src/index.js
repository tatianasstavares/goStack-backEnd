const { response } = require("express");
const express = require("express");
const { uuid } = require("uuidv4");

const projects = [];

const app = express();

app.use(express.json());

app.get("/projects", (req, res) => {
  // const query = req.query;

  return res.json(projects);
});

app.post("/projects", (req, res) => {
  const { title, owner } = req.body;
  const project = { id: uuid(), title, owner };

  projects.push(project);

  return res.json(project);
});

app.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title, owner } = req.body;

  const projectIndex = projects.findIndex((project) => project.id === id);

  projectIndex > 0
    ? projectIndex
    : res.status(400).json({ error: "Project not found" });

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;

  return res.json(project);
});

app.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    res.status(400).json({ error: "Project not found" });
  }

  projects.splice(projectIndex, 1);

  return res.send();
});

app.listen(3333, () => {
  console.log("🚀");
});
