//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import React, { useEffect, useState } from "react";
import axios from "axios";
//import { Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  // const [data, setData] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:6543/api/data")
  //     .then((response) => {
  //       setData(response.data[0]);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/skills" Component={Skills} />
          <Route path="/projects" Component={Projects} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
