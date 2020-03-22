import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <navbar className="navbar">
      <a href="/" id="logo">
        Iliana Vargas
      </a>
      <nav>
        <a href="/">About</a>
        <a href="projects">Projects</a>
        <a href="contact">Contact</a>
      </nav>
    </navbar>
  );
}

export default Navbar;
