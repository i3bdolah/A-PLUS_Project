import React from "react";
import RecBg from "../assets/backgrounds/newsletter-rec.png";
import RecBlue from "../assets/backgrounds/rec-blue.png";
import DotsBlue from "../assets/backgrounds/square-dots2.png";

const Newsletter = () => {
  return (
    <div id="Newsletter" className="newsletter-container">
      <img
        src={RecBg}
        alt="Rectangle Background"
        className="newsletter-RecBg"
      />
      <img
        src={RecBlue}
        alt="Blue Rectangle Background"
        className="newsletter-RecBlue"
      />
      <img
        src={DotsBlue}
        alt="Blue Rectangle Background"
        className="newsletter-DotsBlue"
      />
      <div className="newsletter-container2">
        {/* Left Part */}

        <div className="newsletter-container2_text">
          <p className="newsletter-container2_text_title">
            Subscribe Newsletter
          </p>
          <p className="newsletter-container2_text_subtitle">
            I will update good news and promotion service not spam
          </p>
        </div>

        {/* Right Part */}

        <div className="newsletter-container2_input_container">
          <input
            type="email"
            className="newsletter-container2_input_container_input"
            placeholder="Enter your email address.."
          />
          <button className="newsletter-container2_input_container_btn">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
