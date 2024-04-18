import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <ul className="footer-menu">
          <li className="footer-text">
            &copy; 2024 Ederes Gure. All rights reserved.
          </li>
          {/* Add optional links for social media or other pages */}
          <li className="footer-link">
            <a
              href="https://www.github.com/guduudow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaGithub />
            </a>
          </li>
          <li className="footer-link">
            <a
              href="https://www.linkedin.com/in/ederesgure/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
