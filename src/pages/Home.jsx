import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <section className="hero">
       <Navbar />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        
        <h1>
          Feel the waves
          <br />
          Find your peace
        </h1>

        <p>
          Discover the coastal beauty of Digha
        </p>

        <a href="#destinations" className="hero-btn">
          Explore Digha <span>↓</span>
        </a>
      </div>

      {/* Animated ocean wave */}
      <div className="wave-container">
        <svg
          className="wave wave-one"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          <path
            d="M0,90 C180,150 360,20 540,80
            C720,140 900,30 1080,80
            C1260,130 1350,50 1440,90
            L1440,180 L0,180 Z"
          />
        </svg>

        <svg
          className="wave wave-two"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          <path
            d="M0,110 C200,40 400,150 600,90
            C800,30 1000,150 1200,90
            C1320,55 1380,80 1440,100
            L1440,180 L0,180 Z"
          />
        </svg>
      </div>

    </section>
  );
};

export default Hero;
