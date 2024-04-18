import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../components/Skills.css";

function Skills() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://base-portfolio.onrender.com/api/skills")
        .then((response) => {
          console.log("response", response);
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    getData();
  }, []);
  return (
    <div className="Skills">
      <h1 className="title-font-skills">Skills</h1>
      <h4>Languages</h4>
      <table className="skills-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data?.developer?.skills?.languages?.map((lan) => (
            <tr key={lan.name}>
              <td>
                <img
                  src={`../src/assets/${lan.logo}`}
                  alt={`${lan.name} logo`}
                  className="skill-logo"
                />
              </td>
              <td>{lan.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h4>Technologies</h4>
      <table className="skills-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data?.developer?.skills?.technologies?.map((tech) => (
            <tr key={tech.name}>
              <td>
                <img
                  src={`../src/assets/${tech.logo}`}
                  alt={`${tech.name} logo`}
                  className="skill-logo"
                />
              </td>
              <td>{tech.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h4>Frameworks</h4>
      <table className="skills-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data?.developer?.skills?.frameworks?.map((frks) => (
            <tr key={frks.name}>
              <td>
                <img
                  src={`../src/assets/${frks.logo}`}
                  alt={`${frks.name} logo`}
                  className="skill-logo"
                />
              </td>
              <td>{frks.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h4>Other Skills</h4>
      <table className="skills-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data?.developer?.skills?.otherSkills?.map((other) => (
            <tr key={other.name}>
              <td>
                <img
                  src={`../src/assets/${other.logo}`}
                  alt={`${other.name} logo`}
                  className="skill-logo"
                />
              </td>
              <td>{other.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Skills;
