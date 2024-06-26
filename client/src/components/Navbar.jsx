import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "f7eedd" }}>
        <div className="navbar">
          <Link to="#" className="menuBars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="title-section-nav">
            <span className="main-name-nav">ederes gure</span>
            <span className="middle-part-nav">|</span>
            <span className="job-section-nav">web developer</span>
          </div>
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ color: "f7eedd" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.class}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;
//? = true
//: = false
