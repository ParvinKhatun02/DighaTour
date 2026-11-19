
import React from "react";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="nav-logo">
        Digha<span>Tour.</span>
      </a>

      <div className="nav-links">
        <a href="/" className="active">Home</a>
        <a href="#destinations">Destinations</a>
        <a href="#experiences">Experiences</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
      </div>

      <a href="#destinations" className="nav-cta">
        Explore Digha <span>↗</span>
      </a>
    </nav>
  );
};

export default Navbar;

