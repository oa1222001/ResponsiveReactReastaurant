import React from "react";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { Newsletter, FooterOverlay } from "../../components";
import { images } from "../../constants";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">Cairo, Egypt</p>
          <p className="p__opensans">01xxxxxxc</p>
          <p className="p__opensans">01xxxxxxc</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer logo img" />
          <p className="p__opensans">
            "The Best way to find yourself is to lose yourself in the service of
            others"
          </p>
          <img
            src={images.spoon}
            alt="spoon img"
            className="spoon__img"
            style={{ marginTop: "15px" }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday</p>
          <p className="p__opensans">08:00 am - 12:00am</p>
          <p className="p__opensans">Saturday-Sunday</p>
          <p className="p__opensans">07:00 am - 11:00am</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">2022 Gericht. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
