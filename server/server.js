const express = require('express');
const app = express();
const port = process.env.PORT || "6543";
const dotenv = require('dotenv');
const cors = require('cors');
app.use(cors());
dotenv.config();

const { MongoClient, ObjectId } = require("mongodb");
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@portfolio.t0ezisy.mongodb.net/`;
const client = new MongoClient(dbUrl);

async function connection() {
  const db = client.db("Portfolio");
  return db;
}

async function getProjects() {
  const db = await connection();
  let results = db.collection("projects").find({});
  projectsArray = await results.toArray();
  return projectsArray;
}

async function getSkills() {
  const db = await connection();
  let results = db.collection("skills").find({});
  skillsArray = await results.toArray();
  return skillsArray[0];
}

app.get('/api/projects', async (req, res) => {
  let projects = await getProjects();
  res.send(projects);
});

app.get('/api/skills', async (req, res) => {
  let skills = await getSkills();
  res.send(skills);
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});