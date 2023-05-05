import React from "react";
import { Facebook, Linkedin, Twitter } from "./index.js";

const Footer = () => {
  return (
    <div id="Contact" className="footer-container">
      <hr className="footer-hr" />
      <div className="footer-container-content">
        <div className="footer-container_brief">
          <p className="footer-container_brief_title">A+ Studio</p>
          <p className="footer-container_brief_subtitle">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <div className="footer-container_brief_images">
            <img
              src={Facebook}
              alt="Facebook icon"
              className="footer-Facebook"
            />
            <img src={Twitter} alt="Twitter icon" className="footer-Twitter" />
            <img
              src={Linkedin}
              alt="Linkedin icon"
              className="footer-Linkedin"
            />
          </div>
        </div>
        <div className="footer-container_links">
          <div className="footer-container_links_item">
            <p className="footer-container_links_item_title">What We Do</p>
            <ul>
              <li>
                <a
                  href="#Web Design"
                  className="footer-container_links_item_title_a"
                >
                  Web Design
                </a>
              </li>
              <li>
                <a
                  href="#App Design"
                  className="footer-container_links_item_title_a"
                >
                  App Design
                </a>
              </li>
              <li>
                <a
                  href="#Social Media"
                  className="footer-container_links_item_title_a"
                >
                  Social Media Manage
                </a>
              </li>
              <li>
                <a
                  href="#Market Analysis"
                  className="footer-container_links_item_title_a"
                >
                  Market Analysis Project
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-container_links_item">
            <p className="footer-container_links_item_title">Company</p>
            <ul>
              <li>
                <a
                  href="#About Us"
                  className="footer-container_links_item_title_a"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#Career"
                  className="footer-container_links_item_title_a"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="#Become Investor"
                  className="footer-container_links_item_title_a"
                >
                  Become Investor
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-container_links_item">
            <p className="footer-container_links_item_title">Support</p>
            <ul>
              <li>
                <a href="#FAQ" className="footer-container_links_item_title_a">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#Policy"
                  className="footer-container_links_item_title_a"
                >
                  Policy
                </a>
              </li>
              <li>
                <a
                  href="#Business"
                  className="footer-container_links_item_title_a"
                >
                  Business
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-container_links_item">
            <p className="footer-container_links_item_title">Contact</p>
            <ul>
              <li>
                <a
                  href="#WhatsApp"
                  className="footer-container_links_item_title_a"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#Support 24"
                  className="footer-container_links_item_title_a"
                >
                  Support 24
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footer-hr" />
      <p className="footer-copyright">Copyright © 2022 Abdullah Ban</p>
    </div>
  );
};

export default Footer;
