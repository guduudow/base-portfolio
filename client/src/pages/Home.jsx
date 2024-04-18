import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/Home.css";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import { Link } from "react-router-dom";

function Home() {
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
    <div className="home">
      <div className="title-section">
        <span className="main-name">ederes gure</span>
        <span className="middle-part">|</span>
        <span className="job-section">web developer</span>
      </div>
      <div className="about-me">
        <div className="subheading">
          <h4>About Me</h4>
        </div>
        <p>
          As the title says, I am a web developer. One that is capable of
          making, fast, fluid, beautiful websites that are scalable and on the
          cutting edge of technology. I treat web developer as an art form. A
          website needs certain things, such top of the line coding to ensure
          its relevance well beyond its years. It also needs to hook in its
          viewers with stunning displays of fluidity, color and eye-popping
          graphics. That is my guarantee for you.
        </p>
      </div>
      <div className="sections-container">
        <div className="section left-section">
          <h4>Projects</h4>
          <p>To see what I'm capable of, check out my projects on this page.</p>
          <Link to="/projects">
            <button className="btn">Go to Projects</button>
          </Link>
        </div>
        <div className="section right-section">
          <h4>Skills</h4>
          <p>To view my current toolset, click the link below.</p>
          <Link to="/skills">
            <button className="btn">Go to Skills</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
