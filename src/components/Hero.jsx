import React from "react";
import dots from "../assets/backgrounds/dots.png";
import circle from "../assets/backgrounds/hero-cir.png";
import rectangle from "../assets/backgrounds/hero-rec.png";
import people from "../assets/people/hero-pic.png";

const Hero = () => {
  return (
    <div className="hero hero_container">
      <div className="hero hero_container-left">
        <p className="hero_container-left-title">A Digital Product Agency</p>
        <p className="hero_container-left-subtitle">
          Leading digital agency with solid design and development expertise. We
          build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
        <div className="hero_container-left-btn-container">
          <button className="hero_container-left-btn">Contact Now</button>
          <img src={dots} alt="dots" className="hero_container-left-dots" />
        </div>
      </div>
      <div className="hero hero_container-right">
        <img
          src={people}
          alt="people"
          className="hero_container-right-people"
        />
        <img
          src={circle}
          alt="circle"
          className="hero_container-right-circle"
        />
        <img
          src={rectangle}
          alt="rectangle"
          className="hero_container-right-rectangle"
        />
      </div>
    </div>
  );
};

export default Hero;
