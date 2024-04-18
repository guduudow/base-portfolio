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



const projects = [
  {
    "name": "Boulon Store",
    "code": "Node.js, Express, MongoDB Atlas, Pug, Bootstrap",
    "about": "A beautiful fashion forward web store with sections for men and women. Stylish, responsive and user friendly."
  },
  {
    "name": "Bill Evader",
    "code": "HTML, JavaScript, Canvas, CSS",
    "about": "A game built for the 2024 Global Game Jam. Play as Bill, a 20-something student desperately trying to avoid his bill responsibilites. Dodge the incoming objects and get as far away as you can!"
  },
  {
    "name": "Pembroke's Compendium",
    "code": "Node.js, Express, Pug, Bootstrap",
    "about": "Pembroke's Compendium is a language exploration project that leverages APIs to fetch dictionary definitions for user-inputted words. It goes beyond mere definitions by providing translations of the word in six different languages, making it a valuable tool for language enthusiasts and learners."
  },
  {
    "name": "Shell Game",
    "code": "HTML, CSS, JavaScript",
    "about": "A simple CSS game. See if you can keep track of the ball!"
  }
];

const skills = {
  "developer": {
    "name": "Ederes Gure",
    "skills": {
      "languages": [
        {
          "name": "JavaScript",
          "level": "8/10"
        },
        {
          "name": "HTML5",
          "level": "9/10"
        },
        {
          "name": "CSS",
          "level": "7/10"
        },
        {
          "name": "PHP",
          "level": "7/10"
        },
        {
          "name": "mySQL",
          "level": "7/10"
        },
        {
          "name": "C#",
          "level": "5/10"
        }
      ],
      "technologies": [
        {
          "name": "Node.js",
          "level": "5/10"
        },
        {
          "name": "React",
          "level": "4/10"
        },
        {
          "name": "MongoDB",
          "level": "5/10"
        }
      ],
      "frameworks": [
        {
          "name": "Bootstrap",
          "level": "7/10"
        },
        {
          "name": "Tailwind CSS",
          "level": "5/10"
        },
        {
          "name": "Laravel",
          "level": "6/10"
        }
      ],
      "projects": [
        {
          "name": "Boulon Store",
          "description": "A beautiful fashion forward web store.",
          "technologies": ["Node.js", "Express", "MongoDB Atlas", "Pug", "Bootstrap"],
          "role": "Full-stack Developer"
        },
        {
          "name": "Bill Evader",
          "description": "A game built for the 2024 Global Game Jam.",
          "technologies": ["HTML", "JavaScript", "Canvas", "CSS"],
          "role": "Front-end Developer"
        }
      ],
      "education": [
        {
          "degree": "Postgraduate",
          "name": "Web Development",
          "school": "Humber College",
          "year": "2023-24"
        },
        {
          "degree": "Bachelor's",
          "name": "Human Rights and Equity Studies",
          "school": "York University",
          "year": "2018-22"
        }
      ],
      "otherSkills": [
        {
          "name": "Git",
          "level": "Expert"
        }
      ]
    }
  }
};


app.get('/api/projects', async (req, res) => {
  let projects = await getProjects();
  res.send(projects);
});

app.get('/api/skills', async (req, res) => {
  let skills = await getSkills();
  res.send(skills);
});

//next steps: add skills part then go into react and create the front-end.

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});