import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/Project.css";
import * as FaIcons from "react-icons/fa";

function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:6543/api/projects")
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
    <div className="Projects">
      <h1 className="title-font">Projects</h1>
      {data.map((proj, index) => (
        <div className="project-section" key={index}>
          <div className="project-image">
            <img
              src={`../src/assets/${proj.logo}`}
              alt={`${proj.name} image`}
              className="project-image"
            />
          </div>
          <div className="project-details">
            <p className="project-name">{proj.name}</p>
            <p>{proj.about}</p>
            <p>{proj.code}</p>
            <ul className="project-list">
              <li className="project-link">
                <a href={proj.git} target="_blank" rel="noopener noreferrer">
                  <FaIcons.FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
