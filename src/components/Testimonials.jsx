import React from "react";
import {
  activeTesti,
  pictures1,
  pictures2,
  pictures3,
  pictures4,
  pictures5,
  pictures6,
  pictures7,
  pictures8,
} from "./index.js";
import UnfilledCircle from "../assets/backgrounds/service-cir.png";
import FilledCircle from "../assets/backgrounds/project-cir.png";
import SquareDots from "../assets/backgrounds/square-dots.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      {/* Top Container */}
      <div className="testimonials-container_text" id="Testimonials">
        <p className="testimonials-container_text_title">
          What our happy client say
        </p>
        <p className="testimonials-container_text_subtitle">
          Several selected clients, who already believe in our service.
        </p>
      </div>

      {/* Bottom Container */}
      <div className="testimonials-container_slider">
        {/* Left Container */}
        <div className="testimonials-container_slider_active">
          <img
            src={activeTesti}
            alt="activeTesti"
            className="testimonials-activeTesti"
          />
          <img
            src={SquareDots}
            alt="SquareDots"
            className="testimonials-SquareDots"
          />
          <img
            src={UnfilledCircle}
            alt="UnfilledCircle"
            className="testimonials-UnfilledCircle"
          />
        </div>

        {/* Middle Container */}
        <div className="testimonials-container_slider_text">
          <p className="testimonials-container_slider_text-title">
            Matthew Paul
          </p>
          <p className="testimonials-container_slider_text-subtitle">
            Perfect, very good job! Thank you for the amazing design and work.
            Really impressed with the high quality and quick turnaround time.
            Highly recommend.
          </p>
          <div className="testimonials-container_slider_text-active-circles">
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
            <div className="circle circle4"></div>
            <div className="circle circle5"></div>
          </div>
        </div>

        {/* Right Container */}
        <div className="testimonials-container_slider_pictures">
          <img
            src={pictures1}
            alt="pictures1"
            className="testimonials-pictures1"
          />
          <img
            src={pictures2}
            alt="pictures2"
            className="testimonials-pictures2"
          />
          <img
            src={pictures3}
            alt="pictures3"
            className="testimonials-pictures3"
          />
          <img
            src={pictures4}
            alt="pictures4"
            className="testimonials-pictures4"
          />
          <img
            src={pictures5}
            alt="pictures5"
            className="testimonials-pictures5"
          />
          <img
            src={pictures6}
            alt="pictures6"
            className="testimonials-pictures6"
          />
          <img
            src={pictures7}
            alt="pictures7"
            className="testimonials-pictures7"
          />
          <img
            src={pictures8}
            alt="pictures8"
            className="testimonials-pictures8"
          />
          <img
            src={FilledCircle}
            alt="FilledCircle"
            className="testimonials-FilledCircle"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
